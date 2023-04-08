import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";

import {DocumentInterface} from "../../interfaces/document.interface";

import {DocumentParamsService} from "../../services/params/document/document-params.service";
import {DocumentFacadeService} from "../../services/facade/document/document-facade.service";
import {DocumentMediatorService} from "../../services/mediator/document/document-mediator.service";

export const documentResolver: ResolveFn<DocumentInterface> = (route, state) => {
  const documentParams = inject(DocumentParamsService);
  const documentFacade = inject(DocumentFacadeService);
  const documentMediator = inject(DocumentMediatorService);
  documentFacade.document = documentParams.getDocumentIdFromUrl(route)!!;
  return documentMediator.document;
}
