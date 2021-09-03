import { Input } from '@angular/core';
import { Directive,  ElementRef, HostListener  } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  @Input() appHighlight = 'blue';
  
  constructor(private el: ElementRef) { 
    console.log('HighLight Directives');
    el.nativeElement.style.color = this.appHighlight;
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight('yellow');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }
  
  private highlight(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
