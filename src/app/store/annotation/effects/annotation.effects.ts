import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import {Observable, EMPTY, of, zip} from 'rxjs';
import * as AnnotationActions from '../actions/annotation.actions';
import {AnnotationsFirestoreService} from "../../../services/firebase/annotations/annotations-firestore.service";
import {ImagesStorageService} from "../../../services/firebase/images/images-storage.service";
import {MatSnackBar} from "@angular/material/snack-bar";
import {annotationDeleted} from "../actions/annotation.actions";


@Injectable()
export class AnnotationEffects {

  deleteAnnotation$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(AnnotationActions.deleteAnnotation),
      concatMap(({ annotation, documentId }) => {
        let obs$ = [this.annotationsFirestoreService.deleteAnnotation(annotation, documentId)];
        if (annotation.image !== null) {
          obs$ = [...obs$, this.imagesStorageService.deleteImage(annotation.image)];
        }
        return zip(...obs$);
      }),
      map(() => {
        this.matSnackBar.open('Annotation deleted', 'Close', {duration: 2000})
        return AnnotationActions.annotationDeleted();
      }),
      catchError(error => {
        console.log(error);
        return of(AnnotationActions.AnnotationsFailure({ error }));
      })
    );
  });


  constructor(
    private actions$: Actions,
    private annotationsFirestoreService: AnnotationsFirestoreService,
    private imagesStorageService: ImagesStorageService,
    private matSnackBar: MatSnackBar
  ) {}
}
