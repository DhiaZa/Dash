import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'e404',
        loadChildren: () => import('./e404/e404.module').then(m => m.E404Module)
      },
      {
        path: 'e505',
        loadChildren: () => import('./e500/e500.module').then(m => m.E500Module)
      },
      {
        path: 'lock',
        loadChildren: () => import('./lock/lock.module').then(m => m.LockModule)
      },
      {
        path: 'maintenance',
        loadChildren: () => import('./maintenance/maintenance.module').then(m => m.MaintenanceModule)
      },
      {
        path: 'recover',
        loadChildren: () => import('./recover/recover.module').then(m => m.RecoverModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OtherPRoutingModule { }
