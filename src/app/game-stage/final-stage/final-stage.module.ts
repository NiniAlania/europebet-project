import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalStageComponent } from './final-stage.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    FinalStageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FinalStageComponent
  ]
})
export class FinalStageModule { }
