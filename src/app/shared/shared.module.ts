import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent, FooterComponent } from './layout';
import { TabModule } from './tab';



@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    CommonModule,
    TabModule
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    TabModule
  ]
})
export class SharedModule {}
