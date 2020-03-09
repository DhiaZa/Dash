import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'basict',
        loadChildren: () => import('./basict/basict.module').then(m => m.BasictModule)
      },
      {
        path: 'tabledat',
        loadChildren: () => import('./tabledat/tabledat.module').then(m => m.TabledatModule)
      },
      {
        path: 'tabledit',
        loadChildren: () => import('./tabledit/tabledit.module').then(m => m.TableditModule)
      },
      {
        path: 'tableres',
        loadChildren: () => import('./tableres/tableres.module').then(m => m.TableresModule)
      }


    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TablesRoutingModule { }
