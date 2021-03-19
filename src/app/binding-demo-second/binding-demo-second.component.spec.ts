import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindingDemoSecondComponent } from './binding-demo-second.component';

describe('BindingDemoSecondComponent', () => {
  let component: BindingDemoSecondComponent;
  let fixture: ComponentFixture<BindingDemoSecondComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BindingDemoSecondComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BindingDemoSecondComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
