import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BasictRoutingModule } from './basict-routing.module';
import { BasictComponent } from './basict.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [BasictComponent],
  imports: [
    CommonModule,
    BasictRoutingModule,
    SharedModule
  ]
})
export class BasictModule { }
