import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private custom:ElementRef) { 
    custom.nativeElement.style.color ="green";
  }

}
