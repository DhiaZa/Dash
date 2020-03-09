import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'inbox',
        loadChildren: () => import('./inbox/inbox.module').then(m => m.InboxModule)
      },
      {
        path: 'eread',
        loadChildren: () => import('./emailread/emailread.module').then(m => m.EmailreadModule)
      },
      {
        path: 'ecomp',
        loadChildren: () => import('./emailcomp/emailcomp.module').then(m => m.EmailcompModule)
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailRoutingModule { }
