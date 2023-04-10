import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageCoordinatesComponent } from './image.component';

describe('ImageComponent', () => {
  let component: ImageCoordinatesComponent;
  let fixture: ComponentFixture<ImageCoordinatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageCoordinatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImageCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
