import { TestBed } from '@angular/core/testing';

import { AnnotationsFacadeService } from './annotations-facade.service';

describe('AnnotationsFacadeService', () => {
  let service: AnnotationsFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnotationsFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
