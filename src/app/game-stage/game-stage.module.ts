import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GameStageComponent } from './game-stage.component';
import { SharedModule } from '../shared/shared.module';
import { CashGamesStageComponent } from './cash-games-stage.component';
import { SpringSeriesStageComponent } from './spring-series-stage.component';
import { FinalStageComponent } from './final-stage.component';



@NgModule({
  declarations: [
    GameStageComponent,
    CashGamesStageComponent,
    SpringSeriesStageComponent,
    FinalStageComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    GameStageComponent
  ]
})
export class GameStageModule { }
