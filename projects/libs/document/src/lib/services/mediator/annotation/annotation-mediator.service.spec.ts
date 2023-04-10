import { TestBed } from '@angular/core/testing';

import { AnnotationMediatorService } from './annotation-mediator.service';

describe('AnnotationMediatorService', () => {
  let service: AnnotationMediatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationMediatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
