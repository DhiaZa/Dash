import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'emailalert',
        loadChildren: () => import('./emailalert/emailalert.module').then(m => m.EmailalertModule)
      },
      {
        path: 'emailbasic',
        loadChildren: () => import('./emailbasic/emailbasic.module').then(m => m.EmailbasicModule)
      },
      {
        path: 'emailbilling',
        loadChildren: () => import('./emailbilling/emailbilling.module').then(m => m.EmailbillingModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TemplatesRoutingModule { }
