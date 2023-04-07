import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as DocumentActions from '../actions/document.actions';


@Injectable()
export class DocumentEffects {

  documentDocuments$ = createEffect(() => {
    return this.actions$.pipe(

      ofType(DocumentActions.documentDocuments),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => DocumentActions.storeDocument({ data })),
          catchError(error => of(DocumentActions.documentDocumentsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
