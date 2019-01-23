import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2061Component } from './plan2061.component';

describe('Plan2061Component', () => {
  let component: Plan2061Component;
  let fixture: ComponentFixture<Plan2061Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2061Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2061Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
