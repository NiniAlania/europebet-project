import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeaderboardItemComponent } from './leaderboard-item.component';
import { LeaderboardComponent } from './leaderboard.component';



@NgModule({
  declarations: [
    LeaderboardItemComponent,
    LeaderboardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    LeaderboardComponent
  ]
})
export class LeaderboardModule { }
