import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailcompComponent } from './emailcomp.component';

const routes: Routes = [{ path: '', component: EmailcompComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailcompRoutingModule { }
