import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabledatComponent } from './tabledat.component';

const routes: Routes = [{ path: '', component: TabledatComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabledatRoutingModule { }
