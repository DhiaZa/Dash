import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MdRoutingModule } from './md-routing.module';
import { MdComponent } from './md.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [MdComponent],
  imports: [
    CommonModule,
    MdRoutingModule,
    SharedModule
  ]
})
export class MdModule { }
