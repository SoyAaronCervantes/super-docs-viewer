import { Injectable } from '@angular/core';
import {ActivatedRoute, ActivatedRouteSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class ParamsRouteService {
  protected getParamsMap(activatedRoute: ActivatedRouteSnapshot) {
    return activatedRoute.paramMap;
  }
}
