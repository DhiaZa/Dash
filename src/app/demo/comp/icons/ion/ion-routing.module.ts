import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IonComponent } from './ion.component';

const routes: Routes = [{ path: '', component: IonComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IonRoutingModule { }
