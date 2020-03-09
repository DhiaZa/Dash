import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableditRoutingModule } from './tabledit-routing.module';
import { TableditComponent } from './tabledit.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [TableditComponent],
  imports: [
    CommonModule,
    TableditRoutingModule,
    SharedModule
  ]
})
export class TableditModule { }
