import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PopupRoutingModule } from './popup-routing.module';
import { SharedModule } from '../shared';
import { CampaignModule } from '../campaign';
import { InfoModule } from '../info';
import { GameStageModule } from '../game-stage';



@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    PopupRoutingModule,
    SharedModule,
    GameStageModule,
    InfoModule,
    CampaignModule,
  ],
  exports: [
    PopupComponent
  ]
})
export class PopupModule { }
