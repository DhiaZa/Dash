import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FadvancedComponent } from './fadvanced.component';

const routes: Routes = [{ path: '', component: FadvancedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FadvancedRoutingModule { }
