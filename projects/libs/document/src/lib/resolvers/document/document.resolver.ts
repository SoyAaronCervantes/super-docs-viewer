import {ResolveFn} from "@angular/router";
import {inject} from "@angular/core";


import {DocumentParamsService, DocumentFacadeService, DocumentMediatorService} from "../../services";
import {DocumentInterface} from "../../interfaces";

export const documentResolver: ResolveFn<DocumentInterface> = (route, state) => {
  const documentParams = inject(DocumentParamsService);
  const documentFacade = inject(DocumentFacadeService);
  const documentMediator = inject(DocumentMediatorService);
  documentFacade.document = documentParams.getDocumentIdFromUrl(route)!!;
  return documentMediator.document;
}
