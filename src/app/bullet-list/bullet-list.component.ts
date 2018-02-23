import { Component, OnInit } from '@angular/core';
import { Bullet } from '../model/bullet';
import { BulletType } from '../model/bullet-type';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.css']
})
export class BulletListComponent implements OnInit {

  bulletList: Array<Bullet> = [
    new Bullet(new BulletType('checkbox', null), 0, 'Title 1', 'Description 1',
      [new Tag('Bad', 'chip-red'), new Tag('Okay', 'chip-blue'), new Tag('Good', 'chip-green')]),
    new Bullet(new BulletType('checkbox', null), 0, 'Title 2', 'Description 2',
      [new Tag('Bad', 'chip-red'), new Tag('Okay', 'chip-blue'), new Tag('Good', 'chip-green')]),
    new Bullet(new BulletType('checkbox', null), 0, 'Title 3', 'Description 3',
      [new Tag('Bad', 'chip-red'), new Tag('Okay', 'chip-blue'), new Tag('Good', 'chip-green')]),
    new Bullet(new BulletType('checkbox', null), 0, 'Title 4', 'Description 4',
      [new Tag('Bad', 'chip-red'), new Tag('Okay', 'chip-blue'), new Tag('Good', 'chip-green')]),
    new Bullet(new BulletType('checkbox', null), 0, 'Title 5', 'Description 5',
      [new Tag('Bad', 'chip-red'), new Tag('Okay', 'chip-blue'), new Tag('Good', 'chip-green')]),
  ];

  constructor() { }

  ngOnInit() {
  }

}
