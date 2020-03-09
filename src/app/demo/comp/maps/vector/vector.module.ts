import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VectorRoutingModule } from './vector-routing.module';
import { VectorComponent } from './vector.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [VectorComponent],
  imports: [
    CommonModule,
    VectorRoutingModule,
    SharedModule
  ]
})
export class VectorModule { }
