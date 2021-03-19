import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularFormAss1Component } from './angular-form-ass1.component';

describe('AngularFormAss1Component', () => {
  let component: AngularFormAss1Component;
  let fixture: ComponentFixture<AngularFormAss1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularFormAss1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularFormAss1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
