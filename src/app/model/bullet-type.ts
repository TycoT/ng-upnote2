// new BulletType('chevron_right', 'Note'),
// new BulletType('check_box', 'Todo'),
// new BulletType('lightbulb_outline', 'Idea'),
// new BulletType('event', 'Event')

export class BulletType {
  constructor(
    private materialRef: string = null,
    private iconName: string = null,
    private checked: boolean = null
  ) {}
}
