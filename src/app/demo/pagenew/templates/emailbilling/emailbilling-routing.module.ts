import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EmailbillingComponent } from './emailbilling.component';

const routes: Routes = [{ path: '', component: EmailbillingComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailbillingRoutingModule { }
