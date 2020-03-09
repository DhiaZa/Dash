import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EchartComponent } from './echart.component';

const routes: Routes = [{ path: '', component: EchartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EchartRoutingModule { }
