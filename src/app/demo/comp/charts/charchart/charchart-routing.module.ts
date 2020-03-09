import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharchartComponent } from './charchart.component';

const routes: Routes = [{ path: '', component: CharchartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharchartRoutingModule { }
