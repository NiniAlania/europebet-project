import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-list-item',
  templateUrl: './key-list-item.component.html',
  styleUrls: ['./key-list-item.component.css']
})
export class KeyListItemComponent {
  @Input() text: string = '';
  @Input() position: number = 0;
}
