import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'product',
        loadChildren: () => import('../products/products.module').then(m => m.ProductsModule)
      },
      {
        path: 'projects',
        loadChildren: () => import('../projects/projects.module').then(m => m.ProjectsModule)
      },
      {
        path: 'productl',
        loadChildren: () => import('../products-liste/products-liste.module').then(m => m.ProductsListeModule)
      },
      {
        path: 'order',
        loadChildren: () => import('../order/order.module').then(m => m.OrderModule)
      },
      {
        path: 'costumers',
        loadChildren: () => import('../customers/customers.module').then(m => m.CustomersModule)
      },
      {
        path: 'producte',
        loadChildren: () => import('../product-edit/product-edit.module').then(m => m.ProductEditModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EcommerceRoutingModule { }
