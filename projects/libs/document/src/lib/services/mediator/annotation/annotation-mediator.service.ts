import {inject, Injectable} from '@angular/core';
import {Point} from "@angular/cdk/drag-drop";
import {StoreService} from "../../store/base/store.service";

import {AnnotationsState} from "../../../store/annotations/reducers/annotations.reducer";
import * as AnnotationSelectors from "../../../store/annotations/selectors/annotations.selectors";

import {Observable} from "rxjs";
import {Annotation} from "../../../interfaces/annotations/annotation.interface";

@Injectable({
  providedIn: 'root'
})
export class AnnotationMediatorService {
  readonly #storeService = inject(StoreService<AnnotationsState>);
  get coordinates$(): Observable<Point> {
    return this.#storeService.store.select(AnnotationSelectors.getCoordinates);
  }

  get annotations$(): Observable<Annotation[]> {
    return this.#storeService.store.select(AnnotationSelectors.getAnnotations);
  }
}
