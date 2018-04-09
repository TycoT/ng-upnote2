import { Component, OnInit } from '@angular/core';
import { Bullet } from '../model/bullet';
import { BulletType } from '../model/bullet-type';
import { Tag } from '../model/tag';
import { MatDialog } from '@angular/material';
import { NewBulletDialogComponent } from '../new-bullet-dialog/new-bullet-dialog.component';
import { BulletListService } from '../service/bullet-list.service';
import { DragulaService } from 'ng2-dragula';


declare var window: any;
declare var $: any;

let requestAnimationId;
let mouseY;
let skip = true;
let animating = false;

@Component({
  selector: 'app-bullet-list',
  templateUrl: './bullet-list.component.html',
  styleUrls: ['./bullet-list.component.css']
})
export class BulletListComponent implements OnInit {

  constructor(
    private bulletListService: BulletListService,
    private dragulaService: DragulaService,
    public dialog: MatDialog) {
      dragulaService.setOptions('bag-one', {
        removeOnSpill: false,
        direction: 'vertical',
        copy: false,
        moves: function (el, source, handle, sibling) {
          // // return false;
          // console.log(el);
          // console.log(source);
          // return el.getBoundingClientRect().left === source.getBoundingClientRect().left;
          
          return handle.classList.contains('handle') && !animating;
        },
        accepts: function (el, target, source, sibling) {
          return !animating; // elements can be dropped in any of the `containers` by default
        },
        
      });

      dragulaService.drag.subscribe((value) => {
        // var h = $(window).height();
        // $(document).on('touchmove', (function (e) {
        //   console.log('moveee');
          $('html, body').css({
            overflow: 'hidden',
            // height: '100%'
          });
        // }));

        console.log('on DRAG');

        $(window).on('touchmove', function (e) {

          // if (skip) {
          //   skip = !skip;
          //   console.log(skip);
          //   return;
          // }
          // else {
          //   skip = !skip;
          // }

          // if (requestAnimationId) {
          //   $(window).off('touchmove');
          // }
          
          
          // console.log(current);
          // console.log(e.changedTouches[0]);
          let windowHeight = $(window).height();
          let activateThreshold = 0.11;
          let lowerBound = windowHeight * activateThreshold;
          let upperBound = windowHeight - lowerBound;
          mouseY = e.changedTouches[0].clientY;


          if (mouseY > upperBound) {
            animating = true;
            if (!requestAnimationId) {
              requestAnimationId = setInterval( () => {
                $(window).scrollTop($(window).scrollTop() + 2);
              }, 2);
            }
          }  
          else if (mouseY < lowerBound) {
            animating = true;
            if (!requestAnimationId) {
              requestAnimationId = setInterval(() => {
                $(window).scrollTop($(window).scrollTop() - 2);
              }, 2);
            }
          }
          else {
            // $(window).scrollTop($(window).scrollTop() + 8);
            animating = false;
            clearInterval(requestAnimationId);
            requestAnimationId = null;
            
          }
          // console.log(e.changedTouches[0].clientX, e.changedTouches[0].clientY);


          // function step() {
          //   if (mouseY && (mouseY > upperBound)) {
          //     $(window).scrollTop($(window).scrollTop() + 6);
          //     requestAnimationId = window.requestAnimationFrame(step);
              
          //   }
          //   else if (mouseY && (mouseY < lowerBound)) {
          //     $(window).scrollTop($(window).scrollTop() - 6);
          //     requestAnimationId = window.requestAnimationFrame(step);
          //   }
          //   else {
          //     window.cancelAnimationFrame(requestAnimationId);
          //     requestAnimationId = null;
          //   }

          //   // console.log(requestAnimationId);
          // }

          // if (!requestAnimationId) {
          //   if (mouseY > upperBound || mouseY < lowerBound) {
          //     console.log('initiate new RAF');
          //     window.requestAnimationFrame(step);
          //   }
          // } {
          //   // window.cancelAnimationFrame(requestAnimationId);
          // }
        });
      });

      dragulaService.dragend.subscribe((value) => {
        // this.bulletListService.updatePositions(value.slice(1));
        // $(document).off('touchmove');
        mouseY = null;
        // window.cancelAnimationFrame(requestAnimationId);
        clearInterval(requestAnimationId);
        requestAnimationId = null;
        animating = false;
        $('html, body').css({
          overflow: 'auto',
          'overscroll-behavior-y': 'contain',
          height: 'auto'
        });
        $(window).off('touchmove');
        console.log('drop');
        this.bulletListService.updatePositions();
      });

    }

  ngOnInit() {
    this.bulletListService.getAndSetAllBulletList();
  }

  // can pass in a bullet in the parameters, however if nothing is passed, a empty one is created.
  openDialog = (bullet: Bullet) => {
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
    this.bulletListService.addBullet(bullet).then(() => {
      this.bulletListService.getAndSetAllBulletList();
    });
  }

  updateBullet = (bulletId, bullet) => {
    this.bulletListService.updateBullet(bulletId, bullet);
  }

  onRemove = (bullet) => {
    this.bulletListService.deleteBullet(bullet);
  }

  get bulletList() {
    return this.bulletListService.bulletList;
  }
}
