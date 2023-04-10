import { TestBed } from '@angular/core/testing';

import { FileInputImageService } from './file-input-image.service';

describe('FileInputImageService', () => {
  let service: FileInputImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FileInputImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
