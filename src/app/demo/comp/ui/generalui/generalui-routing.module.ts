import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeneraluiComponent } from './generalui.component';

const routes: Routes = [{ path: '', component: GeneraluiComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GeneraluiRoutingModule { }
