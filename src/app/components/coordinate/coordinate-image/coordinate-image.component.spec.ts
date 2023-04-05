import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateImageComponent } from './coordinate-image.component';

describe('CoordinateImageComponent', () => {
  let component: CoordinateImageComponent;
  let fixture: ComponentFixture<CoordinateImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateImageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
