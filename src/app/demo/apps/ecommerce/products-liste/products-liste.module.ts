import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsListeRoutingModule } from './products-liste-routing.module';
import { ProductsListeComponent } from './products-liste.component';
import {SharedModule} from '../../../../theme/shared/shared.module';


@NgModule({
  declarations: [ProductsListeComponent],
  imports: [
    CommonModule,
    ProductsListeRoutingModule,
    SharedModule
  ]
})
export class ProductsListeModule { }
