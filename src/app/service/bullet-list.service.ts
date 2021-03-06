import { Injectable } from '@angular/core';
import { Bullet } from '../model/bullet';
import { BulletType } from '../model/bullet-type';
import { Tag } from '../model/tag';
import PouchDB from 'pouchdb';
import { Store } from '../model/store';


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

  bulletList: Bullet[] = [];
  showSearch = false;
  query: string;

  store: Store;

  constructor() {
    // this.bulletList = bulletList;

    this.store = new Store('bullets');

    this.getAndSetAllBulletList();

    console.log(this.bulletList);
  }

  addBullet = (bullet: Bullet) => {
    console.log(bullet);

    this.updatePositions();


    return this.store.add(bullet);

    // bullet._id = new Date().toDateString();
    // this.db.put(bullet);

    // this.bulletList.unshift(bullet);
  }

  getBulletById(id: string): Bullet {
    return this.store.get(id);
    // return this.bulletList
    //   .filter(bullet => bullet._id === id)
    //   .pop();
  }

  updateBullet = (bulletId, updatedBullet) => {
    this.store.save(updatedBullet).then((result) => {

      // update frontend
      updatedBullet._rev = result.rev;

      for (let i = 0; i < this.bulletList.length; i++) {
        if (this.bulletList[i]._id === updatedBullet._id) {
          this.bulletList[i] = updatedBullet;
          return;
        }
      }
      
    });

  }

  deleteBullet = (bullet): Bullet => {
    this.store.remove(bullet._id).then(() => {
      // remove from frontend
      this.bulletList.splice(this.bulletList.indexOf(bullet), 1);
      this.getAndSetAllBulletList();
      this.updatePositions();
    });

    return bullet;
    // return this.bulletList.splice(this.bulletList.indexOf(bullet), 1).pop();
  }

  getAndSetAllBulletList() {

    this.store.getAll().then(bullets => {
      bullets.sort(function (a, b) { return a.position - b.position; });


      this.bulletList = bullets;
    });
  }

  updatePositions(args?) {
    // const [el, target, source] = args;
    // console.log(args);
    // console.log(el, target, source);

    for (let i = 0; i < this.bulletList.length; i++) {
      this.bulletList[i].position = i + 1; // we start at 1 becasue new positions are 'null', which wil be at the front
    }

    this.store.updatePositions(this.bulletList).then((result) => {
      result.map((updatedDocument, index) => {
        this.bulletList[index]._rev = updatedDocument.rev;
      });
    });
  }

  toggleSearch() {
    this.showSearch = !this.showSearch;
    this.query = '';
  }

}
