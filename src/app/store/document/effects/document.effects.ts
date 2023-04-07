import {inject, Injectable} from '@angular/core';
import {createEffect, ofType } from '@ngrx/effects';
import {catchError, map, concatMap, tap} from 'rxjs/operators';

import {DocumentsFirestoreService} from "../../../services/firebase/documents/documents-firestore.service";
import {EffectStoreService} from "../../../services/store/effect/effect-store.service";
import {AnnotationsFirestoreService} from "../../../services/firebase/annotations/annotations-firestore.service";
import {ImagesStorageService} from "../../../services/firebase/images/images-storage.service";

import * as DocumentActions from '../actions/document.actions';

import {of, zip} from 'rxjs';


@Injectable()
export class DocumentEffects{
  readonly #actionsService = inject(EffectStoreService);
  readonly #documentsService = inject(DocumentsFirestoreService);
  readonly #annotationsService = inject(AnnotationsFirestoreService);
  readonly #imagesStorageService = inject(ImagesStorageService)

  document$ = createEffect(() => {
    return this.#actionsService.actions$.pipe(
      ofType(DocumentActions.getDocument),
      concatMap(({ id }) => zip([
        of(id),
        this.#documentsService.getDocument$(id)
      ])),
      concatMap( ([ id, value ]) => zip([
        of(value),
        this.#annotationsService.getAnnotations$(id),
        this.#imagesStorageService.getImageUrl(value.storage.url ?? '')
      ])),
      map(([ document, annotations, url ]) =>
        DocumentActions.storeDocument({
          document: {
            ...document,
            annotations,
            storage: { url }
          }
        })
      ),
      catchError(error => of(DocumentActions.documentsFailure({ error })))
    );
  });
}
