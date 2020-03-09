import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FvalidComponent } from './fvalid.component';

const routes: Routes = [{ path: '', component: FvalidComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FvalidRoutingModule { }
