import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Bullet } from '../model/bullet';

@Component({
  selector: 'app-bullet',
  templateUrl: './bullet.component.html',
  styleUrls: ['./bullet.component.css']
})
export class BulletComponent implements OnInit {
  @Input() bullet = new Bullet();
  @Input() updateHandler: Function;
  @Input() updateCheckboxHandler: Function;

  @Output() remove = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  handleRemove(bullet: Bullet) {
    this.remove.emit(bullet);
  }

  checkboxHandler(e) {
    // e.preventDefault();
    this.updateCheckboxHandler(this.bullet._id, this.bullet);
  }

}
