import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabGroupComponent } from './tab-group.component';
import { TabComponent } from './tab.component';



@NgModule({
  declarations: [
    TabGroupComponent,
    TabComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TabGroupComponent,
  ]
})
export class TabModule { }
