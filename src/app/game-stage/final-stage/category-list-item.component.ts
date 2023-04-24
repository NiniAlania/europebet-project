import { Component, Input } from '@angular/core';
import { CategoryListItem } from './category-list-item.model';

@Component({
  selector: 'app-category-list-item',
  templateUrl: './category-list-item.component.html',
  styleUrls: ['./category-list-item.component.css']
})
export class CategoryListItemComponent {
  @Input() item: CategoryListItem | undefined;
}
