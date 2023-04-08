import { Injectable } from '@angular/core';
import {Point} from "@angular/cdk/drag-drop";

import {StoreService} from "../../store/base/store.service";

import {Annotation} from "../../../interfaces/annotation.interface";

import {AnnotationsState} from "../../../store/annotations/reducers/annotations.reducer";
import * as AnnotationActions from '../../../store/annotations/actions/annotations.actions';

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
}
