import { TestBed } from '@angular/core/testing';

import { DocumentParamsService } from './document-params.service';

describe('DocumentParamsService', () => {
  let service: DocumentParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
