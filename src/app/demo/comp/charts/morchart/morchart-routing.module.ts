import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MorchartComponent } from './morchart.component';

const routes: Routes = [{ path: '', component: MorchartComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MorchartRoutingModule { }
