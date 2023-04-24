import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { SpringSeriesStageComponent } from './spring-series-stage.component';



@NgModule({
  declarations: [
    SpringSeriesStageComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    NgOptimizedImage
  ],
  exports: [
    SpringSeriesStageComponent
  ]
})
export class SpringSeriesModule { }
