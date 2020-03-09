import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselRoutingModule } from './carousel-routing.module';
import { CarouselComponent } from './carousel.component';

import {SharedModule} from '../../../../theme/shared/shared.module';

@NgModule({
  declarations: [CarouselComponent],
  imports: [
    CommonModule,
    CarouselRoutingModule,
    SharedModule
  ]
})
export class CarouselModule { }
