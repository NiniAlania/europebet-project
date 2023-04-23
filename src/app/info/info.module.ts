import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InfoListComponent } from './info-list.component';
import { InfoItemComponent } from './info-item.component';



@NgModule({
  declarations: [
    InfoListComponent,
    InfoItemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InfoListComponent
  ]
})
export class InfoModule { }
