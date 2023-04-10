import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerCoordinatesComponent } from './container.component';

describe('ContainerComponent', () => {
  let component: ContainerCoordinatesComponent;
  let fixture: ComponentFixture<ContainerCoordinatesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContainerCoordinatesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContainerCoordinatesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
