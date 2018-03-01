// tslint:disable-next-line:quotemark
import { BulletType } from "./bullet-type";
import { Tag } from "./tag";

export class Bullet {
  constructor (
    public type: BulletType = null,
    public position: number = null,
    public title: string = null,
    public desc: string = null,
    public tags: Array<Tag> = []
  ) {}
}
