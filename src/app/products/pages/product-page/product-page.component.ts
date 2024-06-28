import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.css'
})
export class ProductPageComponent {

  // constructor(private fb: FormBuilder) {}

  //otro tipo de inyección de dependencias enfocado a signals
  private fb = inject(FormBuilder)

  color: string = 'green'

  myForm: FormGroup = this.fb.group({
    name:['', [Validators.required, Validators.minLength(6), Validators.email]]
  })

  changeColor(){
    const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));

    this.color = color
  }

  //TODO crear directiva personalizada para mostrar los errores sin tener que hacer tanta 'carpintería'
}
