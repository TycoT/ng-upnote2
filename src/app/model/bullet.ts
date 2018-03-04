// tslint:disable-next-line:quotemark
import { BulletType } from "./bullet-type";
import { Tag } from './tag';

export class Bullet {

  public id: number = null;
  public type: BulletType = null;
  public position: number = null;
  public title: string = null;
  public desc: string = null;
  public tags: Array<Tag> = [];

  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}
