import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonRoutingModule } from './ion-routing.module';
import { IonComponent } from './ion.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [IonComponent],
  imports: [
    CommonModule,
    IonRoutingModule,
    SharedModule
  ]
})
export class IonModule { }
