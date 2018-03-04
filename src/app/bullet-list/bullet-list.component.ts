import { Component, OnInit } from '@angular/core';
import { Bullet } from '../model/bullet';
import { BulletType } from '../model/bullet-type';
import { Tag } from '../model/tag';
import { MatDialog } from '@angular/material';
import { NewBulletDialogComponent } from '../new-bullet-dialog/new-bullet-dialog.component';
import { BulletListService } from '../service/bullet-list.service';

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.css']
})
export class BulletListComponent implements OnInit {

  constructor(
    private bulletListService: BulletListService,
    public dialog: MatDialog) { }

  ngOnInit() {
  }

  // can pass in a bullet in the parameters, however if nothing is passed, a empty one is created.
  openDialog(bullet: Bullet) {
    this.dialog.open(NewBulletDialogComponent, {
      width: '232px',
      data: {
        bullet: bullet ? bullet : new Bullet(), // pass in bullet from params, if null, pass in a empty bullet object
        onAddBullet: this.addBullet,
        onUpdateBullet: this.updateBullet,
      }
    });
  }

  addBullet = (bullet) => {
    this.bulletListService.addBullet(bullet);
  }

  updateBullet = (bulletId, bullet) => {
    this.bulletListService.updateBullet(bulletId, bullet);
  }

  onRemove = (bullet) => {
    this.bulletListService.deleteBullet(bullet);
  }

  get bulletList() {
    return this.bulletListService.getAllBulletList();
  }

}
