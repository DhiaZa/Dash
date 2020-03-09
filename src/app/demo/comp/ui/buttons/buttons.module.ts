import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonsRoutingModule } from './buttons-routing.module';
import { ButtonsComponent } from './buttons.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [ButtonsComponent],
  imports: [
    CommonModule,
    ButtonsRoutingModule,
    SharedModule
  ]
})
export class ButtonsModule { }
