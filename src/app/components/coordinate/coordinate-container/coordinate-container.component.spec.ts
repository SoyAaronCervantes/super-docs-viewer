import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoordinateContainerComponent } from './coordinate-container.component';

describe('CoordinateContainerComponent', () => {
  let component: CoordinateContainerComponent;
  let fixture: ComponentFixture<CoordinateContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoordinateContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoordinateContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
