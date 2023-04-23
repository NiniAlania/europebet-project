import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from './layout';
import { TabModule } from './tab';
import { BorderComponent } from './border/border.component';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    BorderComponent
  ],
  imports: [
    CommonModule,
    TabModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TabModule,
    BorderComponent
  ]
})
export class SharedModule {}
