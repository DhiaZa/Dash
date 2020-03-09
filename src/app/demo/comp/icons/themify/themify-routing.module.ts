import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemifyComponent } from './themify.component';

const routes: Routes = [{ path: '', component: ThemifyComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ThemifyRoutingModule { }
