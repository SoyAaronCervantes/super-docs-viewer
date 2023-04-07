import { Injectable } from '@angular/core';
import {AnnotationState} from "../../../store/annotation/reducers/annotation.reducer";
import {Point} from "@angular/cdk/drag-drop";
import {Observable} from "rxjs";
import * as AnnotationSelectors from "../../../store/annotation/selectors/annotation.selectors";
import {StoreService} from "../../store/base/store.service";

@Injectable({
  providedIn: 'root'
})
export class AnnotationMediatorService extends StoreService<AnnotationState> {
  get coordinates$(): Observable<Point> {
    return this.store.select(AnnotationSelectors.selectCoordinates);
  }
}
