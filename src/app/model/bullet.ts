// tslint:disable-next-line:quotemark
import { BulletType } from "./bullet-type";
import { Tag } from "./tag";

export class Bullet {
  constructor (
    private type: BulletType,
    private position: number,
    private title: string,
    private desc: string,
    private tags: Array<Tag>
  ) {}
}
