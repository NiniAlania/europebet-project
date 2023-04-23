import { Component, Input } from '@angular/core';
import { LeaderboardItem } from './leaderboard-item.model';

@Component({
  selector: 'app-leaderboard-item',
  templateUrl: './leaderboard-item.component.html',
  styleUrls: ['./leaderboard-item.component.css']
})
export class LeaderboardItemComponent {
  @Input() position: number = 0;
  @Input() item: LeaderboardItem | undefined;
}
