import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomButtonsComponent } from './zoom-buttons.component';

describe('ZoomButtonsComponent', () => {
  let component: ZoomButtonsComponent;
  let fixture: ComponentFixture<ZoomButtonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomButtonsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoomButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
