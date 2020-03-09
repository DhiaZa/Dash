import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailalertRoutingModule } from './emailalert-routing.module';
import { EmailalertComponent } from './emailalert.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [EmailalertComponent],
  imports: [
    CommonModule,
    EmailalertRoutingModule,
    SharedModule
  ]
})
export class EmailalertModule { }
