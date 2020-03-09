import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailbasicComponent } from './emailbasic.component';

const routes: Routes = [{ path: '', component: EmailbasicComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailbasicRoutingModule { }
