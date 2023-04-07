import {inject, Injectable} from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, concatMap } from 'rxjs/operators';
import {of, zip} from 'rxjs';
import * as DocumentActions from '../actions/document.actions';
import {DocumentsFirestoreService} from "../../../services/firebase/documents/documents-firestore.service";
import {EffectStoreService} from "../../../services/store/effect/effect-store.service";
import {AnnotationsFirestoreService} from "../../../services/firebase/annotations/annotations-firestore.service";
import {documentsFailure} from "../actions/document.actions";


@Injectable()
export class DocumentEffects{
  readonly #actionsService = inject(EffectStoreService);
  readonly #documentsService = inject(DocumentsFirestoreService);
  readonly #annotationsService = inject(AnnotationsFirestoreService);

  document$ = createEffect(() => {
    return this.#actionsService.actions$.pipe(
      ofType(DocumentActions.getDocument),
      concatMap(({ id }) => zip([
        of(id),
        this.#documentsService.getDocument$(id)
      ])),
      concatMap( ([ id, value ]) => zip([
        of(value),
        this.#annotationsService.getAnnotations$(id)
      ])),
      map(([ document, annotations ]) => DocumentActions.storeDocument({
          document: {...document, annotations: [...annotations]}
      })),
      catchError(error => of(DocumentActions.documentsFailure({ error })))
    );
  });
}
