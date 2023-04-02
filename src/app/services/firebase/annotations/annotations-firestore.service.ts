import {inject, Injectable} from '@angular/core';
import {collection, collectionData, Firestore} from "@angular/fire/firestore";
import {Observable} from "rxjs";
import {Annotations} from "../../../interfaces/annotations.interface";

@Injectable({
  providedIn: 'root'
})
export class AnnotationsFirestoreService {
  private firestore: Firestore = inject(Firestore);
  getAnnotationsFromDocument(documentId: string) {
    const collectionReference = collection(this.firestore, 'docs', documentId, 'annotations');
    return collectionData(collectionReference, { idField: 'id' }) as Observable<Annotations[]>;
  }
}
