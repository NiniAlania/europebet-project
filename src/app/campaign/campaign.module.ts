import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CampaignCaruselComponent } from './campaign-carusel.component';
import { CampaignCardComponent } from './campaign-card.component';



@NgModule({
  declarations: [
    CampaignCaruselComponent,
    CampaignCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CampaignCaruselComponent
  ]
})
export class CampaignModule { }
