import { Component } from '@angular/core';
import { Tab } from '../shared';

@Component({
  selector: 'app-game-stage',
  templateUrl: './game-stage.component.html',
  styleUrls: ['./game-stage.component.css']
})
export class GameStageComponent {
  stages: Tab[] = [
    {
      date: '1-29 აპრილი',
      title: 'Cash Game',
    },
    {
      date: '13-29 აპრილი',
      title: 'Spring Series',
      },
    {
      date: '30 აპრილი',
      title: 'Final Stage',
    }
  ];

  activeIndex: number = 1;

  setActiveStage(index: number): void {
    this.activeIndex = index;
  }
}
