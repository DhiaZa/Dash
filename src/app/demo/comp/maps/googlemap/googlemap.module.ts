import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GooglemapRoutingModule } from './googlemap-routing.module';
import { GooglemapComponent } from './googlemap.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [GooglemapComponent],
  imports: [
    CommonModule,
    GooglemapRoutingModule,
    SharedModule
  ]
})
export class GooglemapModule { }
