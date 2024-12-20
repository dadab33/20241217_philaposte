import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTitle]'
})
export class TitleDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.color = 'yellow';
    this.el.nativeElement.style.textDecoration = 'underline';
    this.el.nativeElement.style.backgroundColor = 'red';
    this.el.nativeElement.style.fontWeight = 'bold';
  }
}
