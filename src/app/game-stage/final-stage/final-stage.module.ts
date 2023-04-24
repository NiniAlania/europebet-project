import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FinalStageComponent } from './final-stage.component';
import { SharedModule } from '../../shared';
import { CategoryListComponent } from './category-list.component';
import { CategoryListItemComponent } from './category-list-item.component';
import { CardComponent } from './card.component';
import { KeyListComponent } from './key-list.component';
import { KeyListItemComponent } from './key-list-item.component';



@NgModule({
  declarations: [
    FinalStageComponent,
    CategoryListComponent,
    CategoryListItemComponent,
    CardComponent,
    KeyListComponent,
    KeyListItemComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    FinalStageComponent
  ]
})
export class FinalStageModule { }
