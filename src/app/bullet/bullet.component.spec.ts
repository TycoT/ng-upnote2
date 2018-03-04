import { async, ComponentFixture, TestBed, fakeAsync } from '@angular/core/testing';

import { BulletComponent } from './bullet.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

describe('BulletComponent', () => {
  let component: BulletComponent;
  let fixture: ComponentFixture<BulletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ BulletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(fakeAsync(() => {
    fixture = TestBed.createComponent(BulletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
