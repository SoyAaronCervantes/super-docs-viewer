import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AnnotationsEffects } from './annotations.effects';

describe('AnnotationsEffects', () => {
  let actions$: Observable<any>;
  let effects: AnnotationsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AnnotationsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AnnotationsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
