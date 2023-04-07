import {inject, Injectable} from '@angular/core';
import {AnnotationState} from "../../../store/annotation/reducers/annotation.reducer";
import {Point} from "@angular/cdk/drag-drop";
import {Observable} from "rxjs";
import * as AnnotationSelectors from "../../../store/annotation/selectors/annotation.selectors";
import {StoreService} from "../../store/base/store.service";

@Injectable({
  providedIn: 'root'
})
export class AnnotationMediatorService {
  readonly #storeService = inject(StoreService<AnnotationState>);
  get coordinates$(): Observable<Point> {
    return this.#storeService.store.select(AnnotationSelectors.selectCoordinates);
  }
}
