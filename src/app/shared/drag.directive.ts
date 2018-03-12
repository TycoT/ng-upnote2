import { Directive, Renderer, OnInit, AfterViewInit, ViewChild, HostListener, Input } from '@angular/core';
import { ElementRef } from '@angular/core';

@Directive({
  selector: '[appDrag]'
})
export class DragDirective implements OnInit, AfterViewInit {

  @Input('appDragHandle') appDragHandle: Element;

  handleElement: ElementRef;

  constructor(
    private el: ElementRef,
    private renderer: Renderer // using renderer given by Angular so we do not limit ourselves to the browser to Render
  ) {
  }

  ngOnInit() {

  }

  ngAfterViewInit(): void {
    console.log(this.appDragHandle);

    this.appDragHandle.addEventListener('click', (e) => {
      e.preventDefault();
    });

    this.appDragHandle.addEventListener('drag', (e) => {
      console.log(e);
    });
  }

  @HostListener('mouseover') onMouseOver() {
    this.changeColor('red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeColor('black');
  }
  private changeColor(color: string) {
    this.el.nativeElement.style.color = color;
  }
}
