import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'googlemap',
        loadChildren: () => import('./googlemap/googlemap.module').then(m => m.GooglemapModule)
      },
      {
        path: 'vector',
        loadChildren: () => import('./vector/vector.module').then(m => m.VectorModule)
      }


    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MapsRoutingModule { }
