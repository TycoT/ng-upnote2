import { BulletType } from "./bullet-type";

describe('BulletType', () => {

  it('should create an instance', () => {
    expect(new BulletType()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {

    let bulletType: BulletType = new BulletType('testRef', 'testIconName', true);
    expect(bulletType.materialRef).toEqual('testRef');
    expect(bulletType.iconName).toEqual('testIconName');
    expect(bulletType.checked).toEqual(true);
  });
});