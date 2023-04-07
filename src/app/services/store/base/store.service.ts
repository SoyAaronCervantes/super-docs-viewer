import {inject, Injectable} from '@angular/core';
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class StoreService<T> {
  readonly store = inject(Store<T>);
}
