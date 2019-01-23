import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2064Component } from './plan2064.component';

describe('Plan2064Component', () => {
  let component: Plan2064Component;
  let fixture: ComponentFixture<Plan2064Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2064Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2064Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
