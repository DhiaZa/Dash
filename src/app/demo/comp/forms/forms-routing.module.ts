import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fadvanced',
        loadChildren: () => import('./fadvanced/fadvanced.module').then(m => m.FadvancedModule)
      },
      {
        path: 'felement',
        loadChildren: () => import('./felement/felement.module').then(m => m.FelementModule)
      },
      {
        path: 'fvalid',
        loadChildren: () => import('./fvalid/fvalid.module').then(m => m.FvalidModule)
      }

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsRoutingModule { }
