import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnotationCardComponent } from './annotation.component';

describe('AnnotationComponent', () => {
  let component: AnnotationCardComponent;
  let fixture: ComponentFixture<AnnotationCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnnotationCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnnotationCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
