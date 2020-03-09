import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailcompRoutingModule } from './emailcomp-routing.module';
import { EmailcompComponent } from './emailcomp.component';
import {SharedModule} from '../../../theme/shared/shared.module';


@NgModule({
  declarations: [EmailcompComponent],
  imports: [
    CommonModule,
    EmailcompRoutingModule,
    SharedModule
  ]
})
export class EmailcompModule { }
