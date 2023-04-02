import { TestBed } from '@angular/core/testing';

import { AnotationsFirestoreService } from './anotations-firestore.service';

describe('AnotationsFirestoreService', () => {
  let service: AnotationsFirestoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnotationsFirestoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
