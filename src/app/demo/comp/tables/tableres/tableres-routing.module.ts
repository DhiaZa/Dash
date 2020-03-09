import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableresComponent } from './tableres.component';

const routes: Routes = [{ path: '', component: TableresComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableresRoutingModule { }
