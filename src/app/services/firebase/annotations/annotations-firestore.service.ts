import {Injectable} from '@angular/core';
import {collection, collectionData, deleteDoc, doc, setDoc} from "@angular/fire/firestore";
import {from, Observable, of} from "rxjs";
import {Annotation, NewAnnotation} from "../../../interfaces/annotation.interface";
import {FirebaseFirestoreService} from "../base/firestore/firebase-firestore.service";

@Injectable({
  providedIn: 'root'
})
export class AnnotationsFirestoreService extends FirebaseFirestoreService {
  getAnnotations$(documentId: string) {
    const collectionReference = this.getAnnotationsCollection(documentId);
    return collectionData(collectionReference, { idField: 'id' }) as Observable<Annotation[]>;
  }

  createAnnotation(annotation: NewAnnotation, documentId: string) {
    const collectionReference = this.getAnnotationsCollection(documentId);
    const documentReference = doc(collectionReference);
    from(setDoc(documentReference, annotation));
    return of(documentReference.id);
  }

  deleteAnnotation(annotation: Annotation, documentId: string): Observable<void> {
    const documentReference = doc(this.firestore, 'docs', documentId, 'annotations', annotation.id!!);
    return from( deleteDoc(documentReference) );
  }

  private getAnnotationsCollection(documentId: string) {
    return collection(this.firestore, 'docs', documentId, 'annotations');
  }
}
