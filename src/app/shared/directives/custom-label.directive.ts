import { Directive, ElementRef, Input } from '@angular/core';
import { ValidationErrors } from '@angular/forms';

@Directive({
  selector: '[customLabel]'
})
export class CustomLabelDirective {

  private htmlElement?: ElementRef<HTMLElement>
  private _color: string = ''
  private _errors?: ValidationErrors | null | undefined

  //reaccionamos al color
  @Input() set color(value: string){
    this._color = value
    this.setStyle()
  }

  //tipado basado en como funciona el objeto de errores en un formulario reactivo
  @Input() set errors(value: ValidationErrors | null | undefined){
    this._errors = value
    this.setErrorMessage()
  }
  //tenemos por defecto acceso al elemento html donde estemos usando esta directiva
  constructor (private el: ElementRef) {
    this.htmlElement = el

    //tenemos control del elemento
    // this.htmlElement.nativeElement.innerHTML = "Hola"
   }

   setStyle(){
    if(!this.htmlElement) return
    this.htmlElement.nativeElement.style.color = this._color
   }

   setErrorMessage(){
    if(!this.htmlElement) return
    if(!this._errors){
      this.htmlElement.nativeElement.innerHTML = 'No hay errores'
      return
    }

    const errors = Object.keys(this._errors)

    if(errors.includes('required')){
      this.htmlElement.nativeElement.innerHTML = 'Este campo es requerido'
      return
    }

    if(errors.includes('minlength')){
      const min = this._errors['minlength']['requiredLength']
      const current = this._errors['minlength']['actualLength']
      this.htmlElement.nativeElement.innerHTML = `Faltan caracteres: ${min-current} `
      return
    }

    if(errors.includes('email')){
      this.htmlElement.nativeElement.innerHTML = 'El email no es válido'
      return
    }
   }

}
