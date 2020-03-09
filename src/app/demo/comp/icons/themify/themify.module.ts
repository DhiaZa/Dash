import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ThemifyRoutingModule } from './themify-routing.module';
import { ThemifyComponent } from './themify.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [ThemifyComponent],
  imports: [
    CommonModule,
    ThemifyRoutingModule,
    SharedModule
  ]
})
export class ThemifyModule { }
