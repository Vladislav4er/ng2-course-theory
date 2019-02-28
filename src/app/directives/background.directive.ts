import {Directive, ElementRef, HostBinding, HostListener, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appBackground]'
})
export class BackgroundDirective implements OnInit{

  @HostBinding('style.background') background: string;

  constructor(private element: ElementRef,
              private renderer: Renderer2) {

  }

  ngOnInit() {
  }

  @HostListener('mouseenter') mouseEnter() {
    /*this.renderer.setStyle(this.element.nativeElement, 'background-color', 'red');*/ //аналоги
    this.background = 'green';
  }

  @HostListener('mouseleave') mouseLeave() {
    //this.renderer.setStyle(this.element.nativeElement, 'background-color', 'transparent');
    this.background = 'transparent';
  }


}
