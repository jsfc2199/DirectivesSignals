import { Directive, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = ''

  //reaccionamos al color
  @Input() set color(value: string){
    this._color = value
    this.setStyle()
  }

  //tenemos por defecto acceso al elemento html donde estemos usando esta directiva
  constructor (private el: ElementRef) {
    this.htmlElement = el

    //tenemos control del elemento
    this.htmlElement.nativeElement.innerHTML = "Hola"
   }

   setStyle(){
    if(!this.htmlElement) return
    this.htmlElement.nativeElement.style.color = this._color
   }

}
