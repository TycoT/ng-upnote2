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


@NgModule({
  declarations: [
    AppComponent,
    WeekComponent,
    DayComponent,
    BulletListComponent,
    BulletComponent,
    NewBulletDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
