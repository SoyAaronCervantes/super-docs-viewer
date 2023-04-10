import {inject, Injectable} from '@angular/core';
import {StoreService} from "../../store/base/store.service";
import {DocumentState} from "../../../store/document/reducers/document.reducer";
import * as DocumentSelectors from "../../../store/document/selectors/document.selectors";
import {Observable} from "rxjs";
import {DocumentInterface} from "../../../interfaces/document.interface";

@Injectable({
  providedIn: 'root'
})
export class DocumentMediatorService {
  readonly #storeService = inject(StoreService<DocumentState>);
  get document(): Observable<DocumentInterface> {
    return this.#storeService.store.select(DocumentSelectors.selectDocument);
  }
}
