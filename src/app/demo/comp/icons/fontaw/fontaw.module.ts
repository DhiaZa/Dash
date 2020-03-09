import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FontawRoutingModule } from './fontaw-routing.module';
import { FontawComponent } from './fontaw.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [FontawComponent],
  imports: [
    CommonModule,
    FontawRoutingModule,
    SharedModule
  ]
})
export class FontawModule { }
