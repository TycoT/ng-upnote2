import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeekComponent } from './week.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('WeekComponent', () => {
  let component: WeekComponent;
  let fixture: ComponentFixture<WeekComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ WeekComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
