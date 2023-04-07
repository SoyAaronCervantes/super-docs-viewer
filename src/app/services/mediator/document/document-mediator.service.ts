import { Injectable } from '@angular/core';
import {StoreService} from "../../store/base/store.service";
import {DocumentState} from "../../../store/document/reducers/document.reducer";
import * as DocumentSelectors from "../../../store/document/selectors/document.selectors";
import {Observable} from "rxjs";
import {DocumentInterface} from "../../../interfaces/document.interface";
import {Annotation} from "../../../interfaces/annotations.interface";

@Injectable({
  providedIn: 'root'
})
export class DocumentMediatorService extends StoreService<DocumentState> {
  get document(): Observable<DocumentInterface> {
    return this.store.select(DocumentSelectors.selectDocument);
  }

  get annotationsFromDocument(): Observable<Annotation[]> {
    return this.store.select(DocumentSelectors.selectAnnotationsFromDocument);
  }

}
