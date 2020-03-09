import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailalertComponent } from './emailalert.component';

const routes: Routes = [{ path: '', component: EmailalertComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailalertRoutingModule { }
