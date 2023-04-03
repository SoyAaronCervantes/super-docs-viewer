import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocumentToolbarContentComponent } from './document-toolbar-content.component';

describe('DocumentToolbarContentComponent', () => {
  let component: DocumentToolbarContentComponent;
  let fixture: ComponentFixture<DocumentToolbarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DocumentToolbarContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DocumentToolbarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
