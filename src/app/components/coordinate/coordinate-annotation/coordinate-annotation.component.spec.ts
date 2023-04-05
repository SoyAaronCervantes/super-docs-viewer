import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateAnnotationComponent } from './coordinate-annotation.component';

describe('CoordinateAnnotationComponent', () => {
  let component: CoordinateAnnotationComponent;
  let fixture: ComponentFixture<CoordinateAnnotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateAnnotationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateAnnotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
