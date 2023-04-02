import {inject, Injectable} from '@angular/core';
import {collection, collectionData, doc, Firestore, getDoc} from "@angular/fire/firestore";
import {from, map, Observable, of} from "rxjs";
import {DocumentInterface} from "../../../interfaces/document.interface";

@Injectable({
  providedIn: 'root'
})
export class DocumentsFirestoreService {
  private firestore: Firestore = inject(Firestore);
  get documents$(): Observable<DocumentInterface[]> {
    const collectionReference = collection(this.firestore, 'docs');
    return collectionData(collectionReference, { idField: 'id' }) as Observable<DocumentInterface[]>;
  }

  document$(id: string) {
    const documentReference = doc(this.firestore, 'docs', id);
    return from(getDoc(documentReference))
      .pipe(
        map((documentSnapshot) =>
          documentSnapshot.data({ serverTimestamps: 'estimate' }) as DocumentInterface
    ));
  }
}
