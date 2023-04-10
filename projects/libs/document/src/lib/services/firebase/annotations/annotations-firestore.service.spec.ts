import { TestBed } from '@angular/core/testing';

import { AnnotationsFirestoreService } from './annotations-firestore.service';

describe('AnotationsFirestoreService', () => {
  let service: AnnotationsFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationsFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
