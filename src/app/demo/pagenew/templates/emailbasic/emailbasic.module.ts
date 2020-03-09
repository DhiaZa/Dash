import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailbasicRoutingModule } from './emailbasic-routing.module';
import { EmailbasicComponent } from './emailbasic.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [EmailbasicComponent],
  imports: [
    CommonModule,
    EmailbasicRoutingModule,
    SharedModule
  ]
})
export class EmailbasicModule { }
