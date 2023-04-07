import {Injectable} from '@angular/core';
import {collection, collectionData, doc, getDocFromServer} from "@angular/fire/firestore";

import {from, map, Observable} from "rxjs";

import {FirebaseFirestoreService} from "../base/firestore/firebase-firestore.service";

import {DocumentInterface} from "../../../interfaces/document.interface";

@Injectable({
  providedIn: 'root'
})
export class DocumentsFirestoreService extends FirebaseFirestoreService {
  get documents$(): Observable<DocumentInterface[]> {
    const collectionReference = collection(this.firestore, 'docs');
    return collectionData(collectionReference, { idField: 'id' }) as Observable<DocumentInterface[]>;
  }

  getDocument$(id: string): Observable<DocumentInterface> {
    const documentReference = doc(this.firestore, 'docs', id);
    return from(getDocFromServer(documentReference))
      .pipe(
        map(({ data }) => data() as DocumentInterface
      ));
  }
}
