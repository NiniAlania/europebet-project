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
      imageUrl: '/assets/campaign1.png',
      title: 'Get 300% Cashback',
      description: 'retrieve 300% bet amount as real money only here',
      color: '13, 100, 155'
    },
    {
      imageUrl: '/assets/campaign2.png',
      title: 'Coming Soon',
      description: 'retrieve 300% bet amount as real money only here',
      color: '239, 84, 28'
    },
    {
      imageUrl: '/assets/campaign3.png',
      title: 'Win a Jackpot',
      description: 'retrieve 300% bet amount as real money only here',
      color: '26, 23, 108'
    },
    {
      imageUrl: '/assets/campaign1.png',
      title: 'Get 300% Cashback',
      description: 'retrieve 300% bet amount as real money only here',
      color: '13, 100, 155'
    },
    {
      imageUrl: '/assets/campaign2.png',
      title: 'Get 300% Cashback',
      description: 'retrieve 300% bet amount as real money only here',
      color: '239, 84, 28'
    },
    {
      imageUrl: '/assets/campaign3.png',
      title: 'Win a Jackpot',
      description: 'retrieve 300% bet amount as real money only here',
      color: '26, 23, 108'
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }
}
