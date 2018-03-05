// new BulletType('chevron_right', 'Note'),
// new BulletType('check_box', 'Todo'),
// new BulletType('lightbulb_outline', 'Idea'),
// new BulletType('event', 'Event')

export class BulletType {
  constructor(
    public materialRef: string = null,
    public iconName: string = null,
    public checked: boolean = null
  ) {}
}
