import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomButtonComponent } from './zoom.component';

describe('ZoomComponent', () => {
  let component: ZoomButtonComponent;
  let fixture: ComponentFixture<ZoomButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZoomButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZoomButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
