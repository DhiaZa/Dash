import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApexRoutingModule } from './apex-routing.module';
import { ApexComponent } from './apex.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [ApexComponent],
  imports: [
    CommonModule,
    ApexRoutingModule,
    SharedModule
  ]
})
export class ApexModule { }
