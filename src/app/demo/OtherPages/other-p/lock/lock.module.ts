import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LockRoutingModule } from './lock-routing.module';
import { LockComponent } from './lock.component';


@NgModule({
  declarations: [LockComponent],
  imports: [
    CommonModule,
    LockRoutingModule
  ]
})
export class LockModule { }
