import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FelementComponent } from './felement.component';

const routes: Routes = [{ path: '', component: FelementComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FelementRoutingModule { }
