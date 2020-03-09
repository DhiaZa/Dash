import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BlankRoutingModule } from './blank-routing.module';
import { BlankComponent } from './blank.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [BlankComponent],
  imports: [
    CommonModule,
    BlankRoutingModule,
    SharedModule
  ]
})
export class BlankModule { }
