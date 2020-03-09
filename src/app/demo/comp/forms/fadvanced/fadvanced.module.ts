import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FadvancedRoutingModule } from './fadvanced-routing.module';
import { FadvancedComponent } from './fadvanced.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [FadvancedComponent],
  imports: [
    CommonModule,
    FadvancedRoutingModule,
    SharedModule
  ]
})
export class FadvancedModule { }
