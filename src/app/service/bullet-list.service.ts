import { Injectable } from '@angular/core';
import { Bullet } from '../model/bullet';
import { BulletType } from '../model/bullet-type';
import { Tag } from '../model/tag';


const bulletList: Bullet[] = [
  new Bullet({
    id: 1,
    type: new BulletType('check_box', 'Todo'),
    title: 'title 1',
    desc: 'description 1',
    tags: [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]
  }),
  new Bullet({
    id: 2,
    type: new BulletType('check_box', 'Todo'),
    title: 'title 2',
    desc: 'description 2',
    tags: [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]
  }),
  new Bullet({
    id: 3,
    type: new BulletType('check_box', 'Todo'),
    title: 'title 3',
    desc: 'description 3',
    tags: [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]
  }),
  new Bullet({
    id: 4,
    type: new BulletType('check_box', 'Todo'),
    title: 'title 4',
    desc: 'description 4',
    tags: [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]
  }),
  new Bullet({
    id: 5,
    type: new BulletType('check_box', 'Todo'),
    title: 'title 5',
    desc: 'description 5',
    tags: [new Tag('Bad', 'red'), new Tag('Okay', 'blue'), new Tag('Good', 'green')]
  })
];


@Injectable()
export class BulletListService {

  bulletList: Bullet[] = bulletList;

  constructor() { }

  addBullet = (bullet: Bullet) => {
    console.log(bullet);
    this.bulletList.unshift(bullet);
  }

  getBulletById(id: number): Bullet {
    return this.bulletList
      .filter(bullet => bullet.id === id)
      .pop();
  }

  updateBullet = (bulletId, updatedBullet): Bullet => {
    // call some service to update, on subscribe we find the position and set it

    // set the updated bullet
    const originalBullet = this.getBulletById(bulletId);

    Object.assign(originalBullet, updatedBullet);
    // this.bulletList[this.bulletList.indexOf(bulletRef)] = updatedBullet;

    return originalBullet;
  }

  deleteBullet = (bullet): void => {
    this.bulletList.splice(this.bulletList.indexOf(bullet), 1);
  }

  getAllBulletList(): Bullet[] {
    return this.bulletList;
  }

}
