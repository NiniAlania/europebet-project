import { Component } from '@angular/core';
import { Campaign } from './campaign.model';

@Component({
  selector: 'app-campaign-carusel',
  templateUrl: './campaign-carusel.component.html',
  styleUrls: ['./campaign-carusel.component.css']
})
export class CampaignCaruselComponent {
  campaigns: Campaign[] = [
    {
      imageUrl: '/assets/campaign1.jpg',
      title: 'Get 300% Cashback',
      description: 'retrieve 300% bet amount as real money only here'
    },
    {
      imageUrl: '/assets/campaign2.jpg',
      title: 'Coming Soon',
      description: 'retrieve 300% bet amount as real money only here'
    },
    {
      imageUrl: '/assets/campaign3.jpg',
      title: 'Win a Jackpot',
      description: 'retrieve 300% bet amount as real money only here'
    },
    {
      imageUrl: '/assets/campaign1.jpg',
      title: 'Get 300% Cashback',
      description: 'retrieve 300% bet amount as real money only here'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
