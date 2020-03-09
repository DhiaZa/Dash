import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FelementRoutingModule } from './felement-routing.module';
import { FelementComponent } from './felement.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [FelementComponent],
  imports: [
    CommonModule,
    FelementRoutingModule,
    SharedModule
  ]
})
export class FelementModule { }
