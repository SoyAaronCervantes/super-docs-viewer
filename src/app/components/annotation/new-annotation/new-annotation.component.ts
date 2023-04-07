import {Component, ElementRef, Input, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {FileInput} from "ngx-material-file-input";
import {AnnotationFormInterfaces} from "../../../interfaces/annotation-form.interfaces";
import {ActivatedRoute} from "@angular/router";
import {NewAnnotation} from "../../../interfaces/annotations.interface";
import {AnnotationsFirestoreService} from "../../../services/firebase/annotations/annotations-firestore.service";
import {FileInputImageService} from "../../../services/file-input/file-input-image.service";
import {ImagesStorageService} from "../../../services/firebase/images/images-storage.service";
import {MatSidenav} from "@angular/material/sidenav";
import {MatSnackBar} from "@angular/material/snack-bar";
import {AnnotationMediatorService} from "../../../services/mediator/annotation/annotation-mediator.service";
import {Observable} from "rxjs";
import {Point} from "@angular/cdk/drag-drop";
import {DocumentService} from "../../../services/document/document.service";

@Component({
  selector: 'app-new-annotation',
  templateUrl: './new-annotation.component.html',
  styleUrls: ['./new-annotation.component.scss']
})
export class NewAnnotationComponent {
  @Input()
    sidenav: MatSidenav | null = null;

  @ViewChild('imageElement', { static: false })
    imageElement: ElementRef<HTMLImageElement> | undefined;

  coords$: Observable<Point> = this.annotationMediatorService.coordinates$;

  annotationFormGroup = this.fb.group({
    title: ['', Validators.required],
    description: [''],
    file: [''],
    positionY: [0, Validators.required],
    positionX: [0, Validators.required],
  });

  constructor(
    private activatedRoute: ActivatedRoute,
    private annotationsFirestoreService: AnnotationsFirestoreService,
    private annotationMediatorService: AnnotationMediatorService,
    private documentService: DocumentService,
    private fileInputImageService: FileInputImageService,
    private fb: FormBuilder,
    private imageStorageService: ImagesStorageService,
    private matSnackBar: MatSnackBar,
    private renderer: Renderer2,
  ) {}

  showPreviewImage(event: FileInput) {
    if (event === null) return;
    const url = this.fileInputImageService.getObjectUrl(event);
    this.renderer.setProperty(this.imageElement?.nativeElement, 'src', url);
  }

  submit(formGroup: FormGroup, {x, y}: Point) {
    const { title, description, file  } = formGroup.value as AnnotationFormInterfaces;

    const formData = file ? this.fileInputImageService.createFormData(file) : null;
    const documentId = this.documentService.getDocumentIdFromUrl(this.activatedRoute);

    const newAnnotation: NewAnnotation = {
      title,
      description: description !== undefined ? description : null,
      image: formData ? `annotations/${formData.fileName}` : null,
      position: { x, y }
    }

    this.annotationsFirestoreService.createAnnotation(newAnnotation, documentId!!);

    if (formData && newAnnotation.image) {
      this.imageStorageService.uploadImage(formData.formData, newAnnotation.image);
    }

    this.matSnackBar.open('Annotation created', 'Close');

    formGroup.reset();
  }
}
