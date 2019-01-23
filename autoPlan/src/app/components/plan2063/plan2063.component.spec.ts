import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Plan2063Component } from './plan2063.component';

describe('Plan2063Component', () => {
  let component: Plan2063Component;
  let fixture: ComponentFixture<Plan2063Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Plan2063Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Plan2063Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
