import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TableresRoutingModule } from './tableres-routing.module';
import { TableresComponent } from './tableres.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [TableresComponent],
  imports: [
    CommonModule,
    TableresRoutingModule,
    SharedModule
  ]
})
export class TableresModule { }
