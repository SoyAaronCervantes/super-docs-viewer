import { Injectable } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class DocumentService {
  getDocumentIdFromUrl(activatedRoute: ActivatedRoute) {
    const paramMap = activatedRoute.snapshot.paramMap;
    return paramMap.get('id');
  }
}
