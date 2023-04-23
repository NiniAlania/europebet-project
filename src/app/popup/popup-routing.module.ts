import { RouterModule, Routes } from '@angular/router';
import { PopupComponent } from './popup.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {
        path: '',
        component: PopupComponent,
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PopupRoutingModule {}
