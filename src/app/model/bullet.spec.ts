import { Bullet } from "./bullet";
import { BulletType } from "./bullet-type";
import { Tag } from "./tag";

describe('Bullet', () => {

  it('should create an instance', () => {
    expect(new Bullet()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    const testValues = {
      id: '1337',
      type: new BulletType('testRef', 'testIconName', true),
      position: 69,
      title: 'testTitle',
      desc: 'testDesc',
      tags: [new Tag('testName', 'testColor')]
    }
    let bullet = new Bullet(testValues);
    expect(bullet._id).toEqual(testValues.id);
    expect(bullet.type).toEqual(testValues.type);
    expect(bullet.position).toEqual(testValues.position);
    expect(bullet.title).toEqual(testValues.title);
    expect(bullet.desc).toEqual(testValues.desc);
    expect(bullet.tags).toEqual(testValues.tags);
  });
});