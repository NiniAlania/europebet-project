import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Tab } from './tab.model';

@Component({
  selector: 'app-tab-group',
  templateUrl: './tab-group.component.html',
  styleUrls: ['./tab-group.component.css']
})
export class TabGroupComponent {
  @Input() tabs: Tab[] = [];
  @Output() activeIndexChange = new EventEmitter<number>();

  activeIndex: number = 0;

  setActive(index: number): void {
    this.activeIndex = index;
    this.activeIndexChange.emit(this.activeIndex);
  }
}
