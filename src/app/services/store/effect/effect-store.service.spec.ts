import { TestBed } from '@angular/core/testing';

import { EffectStoreService } from './effect-store.service';

describe('EffectStoreService', () => {
  let service: EffectStoreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EffectStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
