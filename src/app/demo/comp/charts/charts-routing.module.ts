import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'apex',
        loadChildren: () => import('./apex/apex.module').then(m => m.ApexModule)
      },
      {
        path: 'charchart',
        loadChildren: () => import('./charchart/charchart.module').then(m => m.CharchartModule)
      },
      {
        path: 'echart',
        loadChildren: () => import('./echart/echart.module').then(m => m.EchartModule)
      },
      {
        path: 'morchart',
        loadChildren: () => import('./morchart/morchart.module').then(m => m.MorchartModule)
      }

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChartsRoutingModule { }
