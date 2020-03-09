import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharchartRoutingModule } from './charchart-routing.module';
import { CharchartComponent } from './charchart.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [CharchartComponent],
  imports: [
    CommonModule,
    CharchartRoutingModule,
    SharedModule
  ]
})
export class CharchartModule { }
