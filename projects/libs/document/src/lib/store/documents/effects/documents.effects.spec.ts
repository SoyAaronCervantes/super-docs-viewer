import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { DocumentsEffects } from './documents.effects';

describe('DocumentEffects', () => {
  let actions$: Observable<any>;
  let effects: DocumentsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DocumentsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.inject(DocumentsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
