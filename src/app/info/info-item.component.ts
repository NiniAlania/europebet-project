import { Component, Input } from '@angular/core';
import { Info } from './info.model';

@Component({
  selector: 'app-info-item',
  templateUrl: './info-item.component.html',
  styleUrls: ['./info-item.component.css']
})
export class InfoItemComponent {
  @Input() info: Info | undefined;

  hidden: boolean = true;

  onClick(): void {
    this.hidden = !this.hidden;
  }
}
