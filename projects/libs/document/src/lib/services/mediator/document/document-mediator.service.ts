import {inject, Injectable} from '@angular/core';

import {DocumentInterface} from "../../../interfaces/document/document.interface";

import {StoreService} from "../../store/base/store.service";
import {DocumentsState} from "../../../store/documents/reducers/documents.reducer";

import * as DocumentSelectors from "../../../store/documents/selectors/documents.selectors";

import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DocumentMediatorService {
  readonly #storeService = inject(StoreService<DocumentsState>);
  get document(): Observable<DocumentInterface> {
    return this.#storeService.store.select(DocumentSelectors.selectDocument);
  }
}
