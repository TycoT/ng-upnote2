import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBulletDialogComponent } from './new-bullet-dialog.component';

describe('NewBulletDialogComponent', () => {
  let component: NewBulletDialogComponent;
  let fixture: ComponentFixture<NewBulletDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewBulletDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBulletDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
