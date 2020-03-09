import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailreadRoutingModule } from './emailread-routing.module';
import { EmailreadComponent } from './emailread.component';
import {SharedModule} from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [EmailreadComponent],
  imports: [
    CommonModule,
    EmailreadRoutingModule,
    SharedModule
  ]
})
export class EmailreadModule { }
