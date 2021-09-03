import { Input } from '@angular/core';
import { Directive,  ElementRef  } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @Input() appHighlight = 'blue';
  
  constructor(private el: ElementRef) { 
    console.log('HighLight Directives');
    el.nativeElement.style.color = this.appHighlight;
  }
}
