import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AnnotationEffects } from './annotation.effects';

describe('AnnotationEffects', () => {
  let actions$: Observable<any>;
  let effects: AnnotationEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AnnotationEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(AnnotationEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
