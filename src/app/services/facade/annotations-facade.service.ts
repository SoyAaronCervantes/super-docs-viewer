import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {AnnotationState} from "../../store/annotation/reducers/annotation.reducer";
import {Point} from "@angular/cdk/drag-drop";
import * as AnnotationActions from '../../store/annotation/actions/annotation.actions';

@Injectable({
  providedIn: 'root'
})
export class AnnotationsFacadeService {
  constructor(private readonly store: Store<AnnotationState>) {}

  updateCoordinates(coordinates: Point) {
    this.store.dispatch(AnnotationActions.updateCoords({coordinates}));
  }
}
