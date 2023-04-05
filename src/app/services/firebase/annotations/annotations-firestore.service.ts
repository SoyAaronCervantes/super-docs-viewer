import {inject, Injectable} from '@angular/core';
import {collection, collectionData, deleteDoc, doc, Firestore, setDoc} from "@angular/fire/firestore";
import {from, Observable} from "rxjs";
import {NewAnnotation, Annotation} from "../../../interfaces/annotations.interface";

@Injectable({
  providedIn: 'root'
})
export class AnnotationsFirestoreService {
  private firestore: Firestore = inject(Firestore);
  getAnnotationsFromDocument(documentId: string) {
    const collectionReference = collection(this.firestore, 'docs', documentId, 'annotations');
    return collectionData(collectionReference, { idField: 'id' }) as Observable<Annotation[]>;
  }

  createAnnotation(annotation: NewAnnotation, documentId: string): Observable<void> {
    const collectionReference = collection(this.firestore, 'docs', documentId, 'annotations');
    const documentReference = doc(collectionReference);
    return from(setDoc(documentReference, annotation));
  }

  deleteAnnotation(annotation: Annotation, documentId: string): Observable<void> {
    const documentReference = doc(this.firestore, 'docs', documentId, 'annotations', annotation.id!!);
    return from( deleteDoc(documentReference) );

  }
}
