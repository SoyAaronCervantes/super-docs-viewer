import { Injectable } from '@angular/core';
import {Point} from "@angular/cdk/drag-drop";

import {StoreService} from "../../store/base/store.service";
import {AnnotationsState} from "../../../store/annotations/reducers/annotations.reducer";

import * as AnnotationActions from '../../../store/annotations/actions/annotations.actions';
import {Annotation, NewAnnotation} from "../../../interfaces/annotations/annotation.interface";

@Injectable({
  providedIn: 'root'
})
export class AnnotationsFacadeService extends StoreService<AnnotationsState>{
  set coordinates(coordinates: Point) {
    this.store.dispatch(AnnotationActions.setCoords({coordinates}));
  }

  set delete({annotation, documentId}: {annotation: Annotation, documentId: string}) {
    this.store.dispatch(AnnotationActions.deleteAnnotation({annotation, documentId}));
  }

  set add({annotation, formData, documentId}: {annotation: NewAnnotation, documentId: string, formData?: FormData}) {
    this.store.dispatch(AnnotationActions.addAnnotation({annotation, documentId, formData}));
  }
}
