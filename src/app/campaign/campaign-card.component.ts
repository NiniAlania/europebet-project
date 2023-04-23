import { Component, Input } from '@angular/core';
import { Campaign } from './campaign.model';

@Component({
  selector: 'app-campaign-card',
  templateUrl: './campaign-card.component.html',
  styleUrls: ['./campaign-card.component.css']
})
export class CampaignCardComponent {
  @Input() campaign: Campaign | undefined;
}
