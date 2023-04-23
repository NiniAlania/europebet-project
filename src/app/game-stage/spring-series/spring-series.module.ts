import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { SpringSeriesStageComponent } from './spring-series-stage.component';



@NgModule({
  declarations: [
    SpringSeriesStageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    SpringSeriesStageComponent
  ]
})
export class SpringSeriesModule { }
