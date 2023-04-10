import { Injectable } from '@angular/core';
import {ParamsRouteService} from "../base/params-route.service";
import {ActivatedRouteSnapshot} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DocumentParamsService extends ParamsRouteService {
  getDocumentIdFromUrl(activatedRoute: ActivatedRouteSnapshot) {
    return this.getParamsMap(activatedRoute).get('id');
  }
}
