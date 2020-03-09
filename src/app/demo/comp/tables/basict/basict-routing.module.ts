import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BasictComponent } from './basict.component';

const routes: Routes = [{ path: '', component: BasictComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BasictRoutingModule { }
