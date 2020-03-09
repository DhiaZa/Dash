import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductsListeComponent } from './products-liste.component';

const routes: Routes = [{ path: '', component: ProductsListeComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsListeRoutingModule { }
