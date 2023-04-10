import { TestBed } from '@angular/core/testing';

import { DocumentsFirestoreService } from './documents-firestore.service';

describe('DocumentsFirestoreService', () => {
  let service: DocumentsFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DocumentsFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
