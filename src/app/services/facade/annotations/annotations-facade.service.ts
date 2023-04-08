import { Injectable } from '@angular/core';
import {Point} from "@angular/cdk/drag-drop";

import {StoreService} from "../../store/base/store.service";

import {Annotation} from "../../../interfaces/annotation.interface";

import {AnnotationState} from "../../../store/annotation/reducers/annotation.reducer";
import * as AnnotationActions from '../../../store/annotation/actions/annotation.actions';

@Injectable({
  providedIn: 'root'
})
export class AnnotationsFacadeService extends StoreService<AnnotationState>{
  set updateCoordinates(coordinates: Point) {
    this.store.dispatch(AnnotationActions.updateCoords({coordinates}));
  }

  set deleteAnnotation({annotation, documentId}: {annotation: Annotation, documentId: string}) {
    this.store.dispatch(AnnotationActions.deleteAnnotation({annotation, documentId}));
  }
}
