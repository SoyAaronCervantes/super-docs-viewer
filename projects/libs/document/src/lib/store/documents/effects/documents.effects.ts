import {inject, Injectable} from '@angular/core';
import {createEffect, ofType } from '@ngrx/effects';
import {catchError, concatMap, mergeMap} from 'rxjs/operators';

import {DocumentsFirestoreService} from "../../../services/firebase/documents/documents-firestore.service";
import {EffectStoreService} from "../../../services/store/effect/effect-store.service";
import {AnnotationsFirestoreService} from "../../../services/firebase/annotations/annotations-firestore.service";
import {ImagesStorageService} from "../../../services/firebase/images/images-storage.service";

import * as DocumentsActions from '../../documents/actions/documents.actions';
import * as AnnotationActions from '../../annotations/actions/annotations.actions';

import {of, zip} from 'rxjs';


@Injectable()
export class DocumentsEffects {
  readonly #actionsService = inject(EffectStoreService);
  readonly #documentsService = inject(DocumentsFirestoreService);
  readonly #annotationsService = inject(AnnotationsFirestoreService);
  readonly #imagesStorageService = inject(ImagesStorageService)

  document$ = createEffect(() => {
    return this.#actionsService.actions$.pipe(
      ofType(DocumentsActions.getDocument),
      concatMap(({ id }) => zip([
        of(id),
        this.#documentsService.getDocument$(id)
      ])),
      concatMap( ([ id, value ]) => zip([
        of(value),
        this.#annotationsService.getAnnotations$(id),
        this.#imagesStorageService.getImageUrl(value.storage.url ?? '')
      ])),
      mergeMap(([ document, annotations, url ]) => [
        DocumentsActions.storeDocument({ document: { ...document, storage: { url } } }),
        AnnotationActions.setAnnotations({ annotations })
      ]),
      catchError(error => of(DocumentsActions.documentsFailure({ error })))
    );
  });
}
