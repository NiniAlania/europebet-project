import { Component, Input } from '@angular/core';
import { LeaderboardItem } from './leaderboard-item.model';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent {
  @Input() items: LeaderboardItem[] = [];
}
