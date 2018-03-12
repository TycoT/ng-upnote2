import { Component, OnInit, Inject, Input, AfterViewInit, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatInput, MatAutocomplete } from '@angular/material';
import { Bullet } from '../model/bullet';
import { BulletType } from '../model/bullet-type';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { startWith } from 'rxjs/operators/startWith';
import { map } from 'rxjs/operators/map';
import { Tag } from '../model/tag';

@Component({
  selector: 'app-new-bullet-dialog',
  templateUrl: './new-bullet-dialog.component.html',
  styleUrls: ['./new-bullet-dialog.component.scss', '../bullet-tag/bullet-tag.component.css']
})
export class NewBulletDialogComponent implements OnInit {
  @ViewChild('titleInput') titleInput: MatInput;
  @ViewChild('descInput') descInput: MatInput;
  @ViewChild('autocompleteInput') autocompleteInput: MatInput;

  // call back function
  onAddBullet: Function;
  onUpdateBullet: Function;

  bullet: Bullet;
  bulletTypes: Array<BulletType> = [
    new BulletType('chevron_right', 'Note'),
    new BulletType('check_box', 'Todo'),
    new BulletType('lightbulb_outline', 'Idea'),
    new BulletType('event', 'Event')
  ];
  myControl: FormControl;
  filteredOptions: Observable<Tag[]>;
  tagOptions: Array<Tag>;

  bulletId: number;

  constructor(
    public dialogRef: MatDialogRef<NewBulletDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) {

      // store the bullet's ref
      if (data.bullet) {
        this.bulletId = data.bullet.id;
      }
      this.onAddBullet = data.onAddBullet;
      this.onUpdateBullet = data.onUpdateBullet;

      this.bullet = Object.assign({}, data.bullet);

      // copy the tags over. the reason we cant assign is that since its an array, its copied by refernce.
      if (data.bullet) {
        this.bullet.tags = data.bullet.tags.slice();
      }
    }

  ngOnInit() {
    // initialize variables
    this.myControl = new FormControl();

    this.tagOptions = [
      new Tag('Bad', 'red'),
      new Tag('Okay', 'blue'),
      new Tag('Good', 'green'),
    ];

    // initialize autocomplete control
    this.filteredOptions = this.myControl.valueChanges
      .pipe(
        startWith(''),
      map(val => val ? this.filter(val) : this.tagOptions.slice())
      );
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  selectBulletType = (bulletType: BulletType) => {
    this.bullet.type = bulletType;

    // focus the title input
    // this.titleInput.focus();
  }

  // autocomplete filter callback
  filter(val: string): Tag[] {
    return this.tagOptions.filter(option =>
      option.name.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  onTagSelect($event) {
    // this.myControl.setValue('');
    this.myControl.reset();
    console.log($event);
    console.log($event.option.id.substr($event.option.id.length - 1));
    console.log(this.tagOptions);

    // finding the index, which is the last character of the option id string
    const tagSelectedName: string = $event.option.value;

    // get the tag object from the tag option list based on the name
    const selectedTag: Tag = this.getTagFromTagOptions(tagSelectedName);


    // check if tag already exist in bullet tag list array
    const tagExist: Tag = this.bullet.tags.filter((tag: Tag) => {
      return tag.name === selectedTag.name;
    })[0];

    // we only add if tag doesnt exist
    if (!tagExist) {
      if (selectedTag) {
        this.bullet.tags.push(selectedTag);
      }
    }
  }

  onTagEnter(tagName: string) {
    const foundTag: Tag = this.getTagFromTagOptions(tagName);

    if (foundTag) {
      this.bullet.tags.push(foundTag);
    }
    else {
      // to do get RANDOM color thats has not already been used.
      const randomColor = Tag.getRandomNotUsedColor(Tag.getUsedColors(this.tagOptions));
      const newTag = new Tag(tagName, randomColor);

      // we push to both lists.
      this.tagOptions.push(newTag);
      this.bullet.tags.push(newTag);

      this.myControl.reset();
    }
  }

  getTagFromTagOptions(tagName) {
    return this.tagOptions.filter((tag: Tag) => {
      return tag.name.toLowerCase() === tagName.toLowerCase();
    })[0];
  }

  onRemoveTag = (tag) => {
    console.log(tag);
    this.bullet.tags.splice(this.bullet.tags.indexOf(tag), 1);
  }

  dialogOnYes() {
    // if a position is set, we are updating the bullet, else we add new bullet
    if (this.bullet.id !== null) {
      console.log('update');
      this.onUpdateBullet(this.bulletId, this.bullet);
      // this.bulletId = this.bullet;
    }
    else {
      console.log('add');
      this.onAddBullet(this.bullet);
    }
  }

}
