import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-bullet-tag',
  template: `
    <mat-chip (click)="onRemove(tag)">
      <div [class]="'color-container chip-'+tag?.color"></div>
      <span>{{tag?.name}}</span>
    </mat-chip>
  `,
  styleUrls: ['./bullet-tag.component.css']
})
export class BulletTagComponent implements OnInit {
  @Input('tag') tag;
  @Input('onRemove') onRemove;

  constructor() { }

  ngOnInit() {
  }

}
