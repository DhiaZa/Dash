import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GeneraluiRoutingModule } from './generalui-routing.module';
import { GeneraluiComponent } from './generalui.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [GeneraluiComponent],
  imports: [
    CommonModule,
    GeneraluiRoutingModule,
    SharedModule
  ]
})
export class GeneraluiModule { }
