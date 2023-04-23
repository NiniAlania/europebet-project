import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { CashGamesStageComponent } from './cash-games-stage.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CashGamesStageComponent
  ],
    imports: [
        CommonModule,
        SharedModule,
        NgOptimizedImage
    ],
  exports: [
    CashGamesStageComponent
  ]
})
export class CashGamesModule { }
