import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-bullet-tag',
  template: `
    <mat-chip (click)="removeHandler(tag)">
      <div [class]="'color-container chip-'+tag?.color"></div>
      <span>{{tag?.name}}</span>
    </mat-chip>
  `,
  styleUrls: ['./bullet-tag.component.css']
})
export class BulletTagComponent implements OnInit {
  @Input() tag;
  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  removeHandler(tag: any) {
    this.remove.emit(tag);
  }



}
