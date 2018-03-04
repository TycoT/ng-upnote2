import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletTagComponent } from './bullet-tag.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';

describe('BulletTagComponent', () => {
  let component: BulletTagComponent;
  let fixture: ComponentFixture<BulletTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ BulletTagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletTagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
