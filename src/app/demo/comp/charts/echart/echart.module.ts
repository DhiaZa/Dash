import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EchartRoutingModule } from './echart-routing.module';
import { EchartComponent } from './echart.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [EchartComponent],
  imports: [
    CommonModule,
    EchartRoutingModule,
    SharedModule
  ]
})
export class EchartModule { }
