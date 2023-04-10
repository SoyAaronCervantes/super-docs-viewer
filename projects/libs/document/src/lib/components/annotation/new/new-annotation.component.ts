import {
  Component,
  ElementRef,
  inject,
  Input,
  Renderer2,
  ViewChild
} from '@angular/core';

import {MatSidenav} from "@angular/material/sidenav";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Point} from "@angular/cdk/drag-drop";

import {FileInput} from "ngx-material-file-input";

import {
  AnnotationMediatorService,
  AnnotationsFacadeService,
  DocumentParamsService,
  FileInputImageService
} from "../../../services";

import {AnnotationFormInterfaces, NewAnnotation} from "../../../interfaces";

import {Observable} from "rxjs";

@Component({
  selector: 'libs-document-new-annotation',
  templateUrl: './new-annotation.component.html',
  styleUrls: ['./new-annotation.component.scss']
})
export class NewAnnotationComponent {
  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #annotationsFacadeService = inject(AnnotationsFacadeService);
  readonly #annotationMediatorService = inject(AnnotationMediatorService);
  readonly #documentParamsService = inject(DocumentParamsService);
  readonly #fb = inject(FormBuilder);
  readonly #fileInputImageService = inject(FileInputImageService);
  readonly #renderer = inject(Renderer2);

  @Input()
  sidenav: MatSidenav;

  @ViewChild('imageElement', { static: false })
  imageElement: ElementRef<HTMLImageElement>;

  coords$: Observable<Point> = this.#annotationMediatorService.coordinates$;

  annotationFormGroup = this.#fb.group({
    title: ['', Validators.required],
    description: [''],
    file: [''],
    positionY: [0, Validators.required],
    positionX: [0, Validators.required],
  });

  showPreviewImage(event: FileInput) {
    if (event === null) return;
    const url = this.#fileInputImageService.getObjectUrl(event);
    this.#renderer.setProperty(this.imageElement?.nativeElement, 'src', url);
  }

  submit(formGroup: FormGroup, {x, y}: Point) {
    const {
      title,
      description,
      file
    } = formGroup.value as AnnotationFormInterfaces;

    const formData = file ? this.#fileInputImageService.createFormData(file) : null;
    const documentId = this.#documentParamsService.getDocumentIdFromUrl(this.#activatedRoute.snapshot);

    if (documentId === null) return;

    const newAnnotation: NewAnnotation = {
      title,
      description: description !== undefined ? description : '',
      image: formData ? `annotations/${formData.fileName}` : '',
      position: { x, y }
    }

    this.#annotationsFacadeService.add = { annotation: newAnnotation, documentId, formData: formData?.formData };

    formGroup.reset();
  }
}
