import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStageComponent } from './game-stage.component';
import { SharedModule } from '../shared/shared.module';
import { CashGamesModule } from './cash-games';
import { FinalStageModule } from './final-stage';
import { SpringSeriesModule } from './spring-series';



@NgModule({
  declarations: [
    GameStageComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    CashGamesModule,
    FinalStageModule,
    SpringSeriesModule
  ],
  exports: [
    GameStageComponent
  ]
})
export class GameStageModule { }
