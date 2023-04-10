import { TestBed } from '@angular/core/testing';

import { ParamsRouteService } from './params-route.service';

describe('ParamsRouteService', () => {
  let service: ParamsRouteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParamsRouteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
