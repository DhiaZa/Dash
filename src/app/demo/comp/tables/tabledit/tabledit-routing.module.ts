import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TableditComponent } from './tabledit.component';

const routes: Routes = [{ path: '', component: TableditComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TableditRoutingModule { }
