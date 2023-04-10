import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationCoordinatesComponent } from './annotation.component';

describe('AnnotationComponent', () => {
  let component: AnnotationCoordinatesComponent;
  let fixture: ComponentFixture<AnnotationCoordinatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotationCoordinatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotationCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
