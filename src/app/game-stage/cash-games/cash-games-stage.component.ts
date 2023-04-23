import { Component } from '@angular/core';
import { LeaderboardItem } from '../../shared';

@Component({
  selector: 'app-cash-games-stage',
  templateUrl: './cash-games-stage.component.html',
  styleUrls: ['./cash-games-stage.component.css']
})
export class CashGamesStageComponent {
  items: LeaderboardItem[] = [
    {
      voucher: '--',
      prize: 'A კატეგორიის საგზური',
      prizeAvatarUrl: '/assets/travel-small.png'
    },
    {
      voucher: '--',
      prize: 'B კატეგორიის საგზური',
      prizeAvatarUrl: '/assets/ticket-small.png'
    },
    {
      voucher: '1500₾',
      prize: 'სპეც. ტურნირის ბილეთი',
      prizeAvatarUrl: ''
    },
    {
      voucher: '1200₾',
      prize: 'სპეც. ტურნირის ბილეთი',
      prizeAvatarUrl: ''
    },
    {
      voucher: '1000₾',
      prize: 'სპეც. ტურნირის ბილეთი',
      prizeAvatarUrl: ''
    },
    {
      voucher: '800₾',
      prize: 'სპეც. ტურნირის ბილეთი',
      prizeAvatarUrl: ''
    }
  ];

  paragraphs: any[] = [
    {
      imageUrl: '/assets/travel-large.png',
      text: 'The Festival in Malta-ს საგზური'
    },
    {
      imageUrl: '/assets/ticket-large.png',
      text: 'სპეციალური ტურნირის „Cashgame Sharks” ბილეთი, სადაც გათამაშდება The Festival in Malta-ს საგზური'
    },
    {
      imageUrl: '/assets/voucher-large.png',
      text: 'ტექნიკის მაღაზიის ვაუჩერი'
    }
  ];
  
}
