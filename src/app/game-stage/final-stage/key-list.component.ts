import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-key-list',
  templateUrl: './key-list.component.html',
  styleUrls: ['./key-list.component.css']
})
export class KeyListComponent {
  @Input() items: string[] = [];
}
