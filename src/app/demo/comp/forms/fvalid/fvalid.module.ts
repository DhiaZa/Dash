import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FvalidRoutingModule } from './fvalid-routing.module';
import { FvalidComponent } from './fvalid.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [FvalidComponent],
  imports: [
    CommonModule,
    FvalidRoutingModule,
    SharedModule
  ]
})
export class FvalidModule { }
