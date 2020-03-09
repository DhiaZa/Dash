import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailreadComponent } from './emailread.component';

const routes: Routes = [{ path: '', component: EmailreadComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailreadRoutingModule { }
