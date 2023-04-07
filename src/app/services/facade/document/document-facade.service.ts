import { Injectable } from '@angular/core';
import {StoreService} from "../../store/base/store.service";
import {DocumentState} from "../../../store/document/reducers/document.reducer";
import * as DocumentActions from "../../../store/document/actions/document.actions";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class DocumentFacadeService extends StoreService<DocumentState>{
  set document(id: string) {
    this.store.dispatch(DocumentActions.getDocument({ id }));
  }
}
