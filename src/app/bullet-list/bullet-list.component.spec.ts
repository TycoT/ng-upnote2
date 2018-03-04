import { async, ComponentFixture, TestBed, inject } from '@angular/core/testing';

import { BulletListComponent } from './bullet-list.component';
import { BulletListService } from '../service/bullet-list.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { MatDialog } from '@angular/material';
import { SharedModule } from '../shared/shared.module';


describe('BulletListComponent', () => {
  let component: BulletListComponent;
  let fixture: ComponentFixture<BulletListComponent>;
  let bulletListService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      schemas: [NO_ERRORS_SCHEMA],
      declarations: [ BulletListComponent ],
      providers: [
        BulletListService
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletListComponent);
    component = fixture.componentInstance;
    bulletListService = fixture.debugElement.injector.get(BulletListService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get an array of items from BulletListService', async(() => {
    expect(bulletListService.getAllBulletList().length).toEqual(5);
  }));
});
