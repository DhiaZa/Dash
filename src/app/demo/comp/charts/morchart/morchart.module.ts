import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MorchartRoutingModule } from './morchart-routing.module';
import { MorchartComponent } from './morchart.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [MorchartComponent],
  imports: [
    CommonModule,
    MorchartRoutingModule,
    SharedModule
  ]
})
export class MorchartModule { }
