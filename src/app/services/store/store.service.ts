import { Injectable } from '@angular/core';
import {Store} from "@ngrx/store";

@Injectable({
  providedIn: 'root'
})
export class StoreService<T> {
  protected readonly store: Store<T>;
}
