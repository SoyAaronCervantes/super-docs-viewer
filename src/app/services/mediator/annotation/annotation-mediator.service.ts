import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";
import {AnnotationState} from "../../../store/annotation/reducers/annotation.reducer";
import {Point} from "@angular/cdk/drag-drop";
import {Observable} from "rxjs";
import * as AnnotationSelectors from "../../../store/annotation/selectors/annotation.selectors";

@Injectable({
  providedIn: 'root'
})
export class AnnotationMediatorService {

  constructor(private readonly store: Store<AnnotationState>) {}

  get coordinates$(): Observable<Point> {
    return this.store.select(AnnotationSelectors.selectCoordinates);
  }
}
