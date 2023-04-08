import {Component, ElementRef, inject, Input, Renderer2, ViewChild} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

import {MatSidenav} from "@angular/material/sidenav";
import {Point} from "@angular/cdk/drag-drop";

import {FileInput} from "ngx-material-file-input";

import {AnnotationFormInterfaces} from "../../../interfaces/annotation-form.interfaces";
import {NewAnnotation} from "../../../interfaces/annotation.interface";

import {AnnotationMediatorService} from "../../../services/mediator/annotation/annotation-mediator.service";

import {Observable} from "rxjs";
import {AnnotationsFacadeService} from "../../../services/facade/annotations/annotations-facade.service";
import {FileInputImageService} from "../../../services/file-input/file-input-image.service";
import {DocumentParamsService} from "../../../services/params/document/document-params.service";

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

  readonly #activatedRoute = inject(ActivatedRoute);
  readonly #annotationsFacadeService = inject(AnnotationsFacadeService);
  readonly #annotationMediatorService = inject(AnnotationMediatorService);
  readonly #documentParamsService = inject(DocumentParamsService);
  readonly #fb = inject(FormBuilder);
  readonly #fileInputImageService = inject(FileInputImageService);
  readonly #renderer = inject(Renderer2);

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
    const { title, description, file  } = formGroup.value as AnnotationFormInterfaces;

    const formData = file ? this.#fileInputImageService.createFormData(file) : null;
    const documentId = this.#documentParamsService.getDocumentIdFromUrl(this.#activatedRoute.snapshot)!!;

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
