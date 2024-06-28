import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>

  //tenemos por defecto acceso al elemento html donde estemos usando esta directiva
  constructor (private el: ElementRef) {
    console.log(el);
    this.htmlElement = el

    //tenemos control del elemento
    this.htmlElement.nativeElement.innerHTML = "Hola"
   }

}
