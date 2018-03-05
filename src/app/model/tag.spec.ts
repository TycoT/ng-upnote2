import { Tag } from "./tag";

describe('Tag', () => {

  it('should create an instance', () => {
    expect(new Tag()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let tag = new Tag(
      'yolo', 'red'
    );
    expect(tag.name).toEqual('yolo');
    expect(tag.color).toEqual('red');
  });

});