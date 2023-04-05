import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import { Observable, EMPTY, of } from 'rxjs';
import * as AnnotationActions from '../actions/annotation.actions';


@Injectable()
export class AnnotationEffects {

  [annotation]Annotations$ = createEffect(() => {
    return this.actions$.pipe( 

      ofType(AnnotationActions.[annotation]Annotations),
      concatMap(() =>
        /** An EMPTY observable only emits completion. Replace with your own observable API request */
        EMPTY.pipe(
          map(data => AnnotationActions.[annotation]AnnotationsSuccess({ data })),
          catchError(error => of(AnnotationActions.[annotation]AnnotationsFailure({ error }))))
      )
    );
  });


  constructor(private actions$: Actions) {}
}
