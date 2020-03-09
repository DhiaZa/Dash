import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TimelineRoutingModule } from './timeline-routing.module';
import { TimelineComponent } from './timeline.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [TimelineComponent],
  imports: [
    CommonModule,
    TimelineRoutingModule,
    SharedModule
  ]
})
export class TimelineModule { }
