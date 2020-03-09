import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailbillingRoutingModule } from './emailbilling-routing.module';
import { EmailbillingComponent } from './emailbilling.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [EmailbillingComponent],
  imports: [
    CommonModule,
    EmailbillingRoutingModule,
    SharedModule
  ]
})
export class EmailbillingModule { }
