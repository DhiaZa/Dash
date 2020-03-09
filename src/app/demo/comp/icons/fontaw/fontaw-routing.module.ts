import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FontawComponent } from './fontaw.component';

const routes: Routes = [{ path: '', component: FontawComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FontawRoutingModule { }
