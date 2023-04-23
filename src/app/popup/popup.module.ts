import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PopupRoutingModule } from './popup-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CampaignModule } from '../campaign/campaign.module';
import { InfoModule } from '../info/info.module';



@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    PopupRoutingModule,
    SharedModule,
    InfoModule,
    CampaignModule,
  ],
})
export class PopupModule { }
