import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBulletDialogComponent } from './new-bullet-dialog.component';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, FormControlDirective, FormGroupDirective } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from '../shared/shared.module';
import { MatDialogModule, MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { inject } from '@angular/core/src/render3';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';


describe('NewBulletDialogComponent', () => {
  let component: NewBulletDialogComponent;
  let fixture: ComponentFixture<NewBulletDialogComponent>;
  let dialog: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [SharedModule, MatDialogModule, NoopAnimationsModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ NewBulletDialogComponent ],
      providers: [{ provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] }, FormControlDirective, FormGroupDirective]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    // dialog = d;
    fixture = TestBed.createComponent(NewBulletDialogComponent);
    component = fixture.componentInstance;
    dialog = fixture.debugElement.injector.get(MatDialog);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
