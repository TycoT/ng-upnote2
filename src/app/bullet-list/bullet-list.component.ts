import { Component, OnInit } from '@angular/core';
import { Bullet } from '../model/bullet';
import { BulletType } from '../model/bullet-type';
import { Tag } from '../model/tag';
import { MatDialog } from '@angular/material';
import { NewBulletDialogComponent } from '../new-bullet-dialog/new-bullet-dialog.component';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.css']
})
export class BulletListComponent implements OnInit {

  bulletList: Array<Bullet> = [
    new Bullet(new BulletType('check_box', 'Todo'), 0, 'Title 1', 'Description 1',
      [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]),
    new Bullet(new BulletType('check_box', 'Todo'), 0, 'Title 2', 'Description 2',
      [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]),
    new Bullet(new BulletType('check_box', 'Todo'), 0, 'Title 3', 'Description 3',
      [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]),
    new Bullet(new BulletType('check_box', 'Todo'), 0, 'Title 4', 'Description 4',
      [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]),
    new Bullet(new BulletType('check_box', 'Todo'), 0, 'Title 5', 'Description 5',
      [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]),
  ];

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }

  // can pass in a bullet in the parameters, however if nothing is passed, a empty one is created.
  openDialog(bullet: Bullet) {
    this.dialog.open(NewBulletDialogComponent, {
      width: '232px',
      data: bullet ? bullet : new Bullet() // pass in bullet from params, if null, pass in a empty bullet object
    });
  }

}
