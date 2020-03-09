import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fontaw',
        loadChildren: () => import('./fontaw/fontaw.module').then(m => m.FontawModule)
      },
      {
        path: 'ion',
        loadChildren: () => import('./ion/ion.module').then(m => m.IonModule)
      },
      {
        path: 'md',
        loadChildren: () => import('./md/md.module').then(m => m.MdModule)
      },
      {
        path: 'themify',
        loadChildren: () => import('./themify/themify.module').then(m => m.ThemifyModule)
      }

    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IconsRoutingModule { }
