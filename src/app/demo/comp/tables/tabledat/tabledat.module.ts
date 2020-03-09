import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TabledatRoutingModule } from './tabledat-routing.module';
import { TabledatComponent } from './tabledat.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [TabledatComponent],
  imports: [
    CommonModule,
    TabledatRoutingModule,
    SharedModule
  ]
})
export class TabledatModule { }
