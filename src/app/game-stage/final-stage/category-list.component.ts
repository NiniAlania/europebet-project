import { Component, Input } from '@angular/core';
import { CategoryListItem } from './category-list-item.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent {
  @Input() title: string = '';
  @Input() items: CategoryListItem[] = [];
}
