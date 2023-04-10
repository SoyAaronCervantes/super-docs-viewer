import { Injectable } from '@angular/core';
import {StoreService} from "../../store";
import {DocumentsState} from "../../../store";
import * as DocumentActions from "../../../store/documents/actions/documents.actions";

@Injectable({
  providedIn: 'root'
})
export class DocumentFacadeService extends StoreService<DocumentsState>{
  set document(id: string) {
    this.store.dispatch(DocumentActions.getDocument({ id }));
  }
}
