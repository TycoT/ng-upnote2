import { TestBed, inject } from '@angular/core/testing';

import { BulletListService } from './bullet-list.service';
import { NO_ERRORS_SCHEMA } from '@angular/core';
import { Bullet } from '../model/bullet';
import { BulletType } from '../model/bullet-type';
import { Tag } from '../model/tag';

describe('BulletListService', () => {
  let service: BulletListService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      schemas: [NO_ERRORS_SCHEMA],
      providers: [BulletListService]
    });
  });

  beforeEach(() => { service = new BulletListService(); });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('#addBullet should add bullet to front of bulletList', () => {
    const newBullet = new Bullet();
    service.addBullet(newBullet);

    expect(service.bulletList.shift()).toEqual(newBullet);
  });

  it('#getBulletById should get bullet by ID', () => {
    const testId = 1337;
    const newBullet = new Bullet({ id: testId });
    service.addBullet(newBullet);

    expect(service.getBulletById(testId)).toEqual(newBullet);
  });

  it('#updateBullet should update all values of the bullet', () => {

    // add bullet, then change it.
    const testValues = {
      id: 1337,
      type: new BulletType('chevron_right', 'Note'),
      position: 1,
      title: 'testTitle',
      desc: 'testDesc',
      tags: [new Tag('testTag', 'red')]
    };

    const newBullet = new Bullet(testValues);
    service.addBullet(newBullet);

    const updatedValues = {
      type: new BulletType('check_box', 'Todo'),
      position: 2,
      title: 'updatedTitle',
      desc: 'updatedDesc',
      tags: [new Tag('updatedTag', 'blue')]
    };

    const updatedBullet = service.updateBullet(testValues.id, updatedValues);

    expect(updatedBullet.type).toEqual(updatedValues.type);
    expect(updatedBullet.position).toEqual(updatedValues.position);
    expect(updatedBullet.title).toEqual(updatedValues.title);
    expect(updatedBullet.desc).toEqual(updatedValues.desc);
    expect(updatedBullet.tags).toEqual(updatedValues.tags);
  });

  it('#deleteBullet should get bullet by ID', () => {
    const testId = 1337;
    const newBullet = new Bullet({ id: testId });
    const bulletListLength = service.getAllBulletList().length;
    const updatedBulletListLength = service.getAllBulletList().length;
    service.addBullet(newBullet);
    expect(service.bulletList.shift()).toEqual(newBullet);
    service.deleteBullet(newBullet);

    expect(service.getBulletById(testId)).toEqual(newBullet);
  });


});
