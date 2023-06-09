import {inject, Injectable} from '@angular/core';
import {MatSnackBar} from "@angular/material/snack-bar";

import {Actions, createEffect, ofType} from '@ngrx/effects';

import * as AnnotationsActions from '../actions/annotations.actions';

import {AnnotationsFirestoreService} from "../../../services/firebase/annotations/annotations-firestore.service";
import {ImagesStorageService} from "../../../services/firebase/images/images-storage.service";

import {catchError, concatMap, map} from "rxjs/operators";
import {Observable, of, zip} from "rxjs";

@Injectable()
export class AnnotationsEffects {
  readonly #actions$ = inject(Actions);
  readonly #annotationsFirestoreService = inject(AnnotationsFirestoreService);
  readonly #imagesStorageService = inject(ImagesStorageService);
  readonly #matSnackBar = inject(MatSnackBar);

  deleteAnnotation$ = createEffect(() => {
    return this.#actions$.pipe(

      ofType(AnnotationsActions.deleteAnnotation),
      concatMap(({ annotation, documentId }) => {
        let obs$ = [this.#annotationsFirestoreService.deleteAnnotation(annotation, documentId)];
        if (annotation.image !== null) {
          obs$ = [...obs$, this.#imagesStorageService.deleteImage(annotation.image)];
        }
        return zip(of(annotation.id),...obs$);
      }),
      map(([id]) => {
        this.#matSnackBar.open('Annotation deleted', 'Close', {duration: 2000})
        return AnnotationsActions.deletedAnnotation({id});
      }),
      catchError(error => of(AnnotationsActions.annotationFailure({ error })))
    );
  });

  addAnnotation$ = createEffect(() => {
    return this.#actions$.pipe(

      ofType(AnnotationsActions.addAnnotation),
      concatMap(({ annotation, formData, documentId }) => {
        let obs$: Observable<any>[] = [];
        const documentId$ = this.#annotationsFirestoreService.createAnnotation(annotation, documentId);
        if (formData && annotation.image) { obs$ = [this.#imagesStorageService.uploadImage(formData, annotation.image)]; }
        return zip([of(annotation), documentId$, ...obs$]);
      }),
      map(([annotation, id]) => {
        this.#matSnackBar.open('Annotation added', 'Close', {duration: 2000})
        return AnnotationsActions.addedAnnotation({
          annotation: { ...annotation, id }
        });
      }),
      catchError(error => of(AnnotationsActions.annotationFailure({ error })))
    );
  });
}
