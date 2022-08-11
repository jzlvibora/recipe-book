import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Section7DirectiveComponent } from './section7-directive.component';

describe('Section7DirectiveComponent', () => {
  let component: Section7DirectiveComponent;
  let fixture: ComponentFixture<Section7DirectiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Section7DirectiveComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Section7DirectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
