import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VectorComponent } from './vector.component';

const routes: Routes = [{ path: '', component: VectorComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VectorRoutingModule { }
