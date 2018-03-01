import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletTagComponent } from './bullet-tag.component';

describe('BulletTagComponent', () => {
  let component: BulletTagComponent;
  let fixture: ComponentFixture<BulletTagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
