import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PopupComponent } from './popup.component';
import { PopupRoutingModule } from './popup-routing.module';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    PopupComponent
  ],
  imports: [
    CommonModule,
    PopupRoutingModule,
    SharedModule
  ],
})
export class PopupModule { }
