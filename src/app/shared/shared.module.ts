import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomLabelDirective } from './directives/custom-label.directive';



@NgModule({
  declarations: [
    //se deben declarar y exportar para usarlas en otros módulos como si fueran un componente normal
    CustomLabelDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomLabelDirective
  ]
})
export class SharedModule { }
