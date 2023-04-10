import { TestBed } from '@angular/core/testing';

import { DocumentMediatorService } from './document-mediator.service';

describe('DocumentMediatorService', () => {
  let service: DocumentMediatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentMediatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
