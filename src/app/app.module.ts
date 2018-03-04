import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { WeekComponent } from './week/week.component';
import { DayComponent } from './day/day.component';
import { BulletListComponent } from './bullet-list/bullet-list.component';
import { BulletComponent } from './bullet/bullet.component';
import { SharedModule } from './shared/shared.module';
import { NewBulletDialogComponent } from './new-bullet-dialog/new-bullet-dialog.component';
import { MatAutocompleteModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BulletTagComponent } from './bullet-tag/bullet-tag.component';
import { BulletListService } from './service/bullet-list.service';


@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    DayComponent,
    BulletListComponent,
    BulletComponent,
    NewBulletDialogComponent,
    BulletTagComponent
  ],
  entryComponents: [
    NewBulletDialogComponent,
    // BulletListComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [
    BulletListService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
