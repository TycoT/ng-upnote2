const tagColors = [
  'red',
  'blue',
  'green',
  'orange',
  'pink',
  'purple',
  'brown',
  'teal',
  'cyan',
  'grey'
];

export class Tag {

  constructor(
    public name: string,
    public color: string
  ) {}

  static getUsedColors(tags: Array<Tag>) {
    const usedColors = [];
    tags.map((tag) => {
      usedColors.push(tag.color);
    });
    return usedColors;
  }

  static getRandomNotUsedColor(usedColors: Array<any>) {
    // take a copy of the array of all colors
    const arrayOfUnusedColor = tagColors.slice();

    // for each used color, we splice them out of array of all colors
    usedColors.map((color) => {
      arrayOfUnusedColor.splice(arrayOfUnusedColor.indexOf(color), 1);
    });

    // return a random color.
    const randomColor = arrayOfUnusedColor[Math.floor(Math.random() * arrayOfUnusedColor.length)];
    return randomColor;
  }
}
