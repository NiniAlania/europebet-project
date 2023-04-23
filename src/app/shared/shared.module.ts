import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from './layout';
import { TabModule } from './tab';
import { BorderComponent } from './border';
import { LeaderboardModule } from './leaderboard';
import { ParagraphComponent } from './paragraph';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BorderComponent,
    ParagraphComponent,
  ],
  imports: [
    CommonModule,
    TabModule,
    LeaderboardModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TabModule,
    BorderComponent,
    LeaderboardModule,
    ParagraphComponent
  ]
})
export class SharedModule {}
