import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './theme/layout/admin/admin.component';
import { AuthComponent } from './theme/layout/auth/auth.component';
import { OtherPModule } from './demo/OtherPages/other-p/other-p.module';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard/default',
        pathMatch: 'full'
      },
      {
        path: 'dashboard',
        loadChildren: () => import('./demo/dashboard/dashboard.module').then(m => m.DashboardModule)
      },

      {
        path: 'email',
        loadChildren: () => import('./demo/email/email.module').then(m => m.EmailModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('./demo/calendar/calendar.module').then(m => m.CalendarModule)
      },

      {
        path: 'ecommerce',
        loadChildren: () => import('./demo/apps/ecommerce/ecommerce/ecommerce.module').then(m => m.EcommerceModule)
      },
      //-------------------------//

      {
        path: 'charts',
        loadChildren: () => import('./demo/comp/charts/charts.module').then(m => m.ChartsModule)
      },

      {
        path: 'forms',
        loadChildren: () => import('./demo/comp/forms/forms.module').then(m => m.FormsModule)
      },
      {
        path: 'icons',
        loadChildren: () => import('./demo/comp/icons/icons.module').then(m => m.IconsModule)
      },
      {
        path: 'maps',
        loadChildren: () => import('./demo/comp/maps/maps.module').then(m => m.MapsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./demo/comp/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'ui',
        loadChildren: () => import('./demo/comp/ui/ui.module').then(m => m.UiModule)
      },

      {
        path: 'extra',
        loadChildren: () => import('./demo/pagenew/extra/extra.module').then(m => m.ExtraModule)
      },

      {
        path: 'templates',
        loadChildren: () => import('./demo/pagenew/templates/templates.module').then(m => m.TemplatesModule)
      },


      //--------------------------------//

      {
        path: 'basic',
        loadChildren: () => import('./demo/ui-elements/ui-basic/ui-basic.module').then(m => m.UiBasicModule)
      },
      {
        path: 'forms',
        loadChildren: () => import('./demo/pages/form-elements/form-elements.module').then(m => m.FormElementsModule)
      },
      {
        path: 'tables',
        loadChildren: () => import('./demo/pages/tables/tables.module').then(m => m.TablesModule)
      },
      {
        path: 'charts',
        loadChildren: () => import('./demo/pages/core-chart/core-chart.module').then(m => m.CoreChartModule)
      },
      {
        path: 'sample-page',
        loadChildren: () => import('./demo/extra/sample-page/sample-page.module').then(m => m.SamplePageModule)
      }
    ]
  },
  {
    path: '',
    component: AuthComponent,
    children: [
      {
        path: 'auth',
        loadChildren: () => import('./demo/pages/authentication/authentication.module').then(m => m.AuthenticationModule)
      }
    ]



  },

{


    path: '',
    component: AuthComponent,
  children: [
    {
    path: 'otherP',

    loadChildren: () => import('./demo/OtherPages/other-p/other-p.module').then(m => m.OtherPModule)
  }
]
},
  { path: 'inbox', loadChildren: () => import('./demo/email/inbox/inbox.module').then(m => m.InboxModule) },
  { path: 'emailread', loadChildren: () => import('./demo/email/emailread/emailread.module').then(m => m.EmailreadModule) },
  { path: 'emailcomp', loadChildren: () => import('./demo/email/emailcomp/emailcomp.module').then(m => m.EmailcompModule) },
  { path: 'calendar', loadChildren: () => import('./demo/calendar/calendar.module').then(m => m.CalendarModule) },
  { path: 'products', loadChildren: () => import('./demo/apps/ecommerce/products/products.module').then(m => m.ProductsModule) },
  { path: 'products', loadChildren: () => import('./demo/apps/ecommerce/products/products.module').then(m => m.ProductsModule) },
  { path: 'products-liste', loadChildren: () => import('./demo/apps/ecommerce/products-liste/products-liste.module').then(m => m.ProductsListeModule) },
  { path: 'order', loadChildren: () => import('./demo/apps/ecommerce/order/order.module').then(m => m.OrderModule) },
  { path: 'customers', loadChildren: () => import('./demo/apps/ecommerce/customers/customers.module').then(m => m.CustomersModule) },
  { path: 'product-edit', loadChildren: () => import('./demo/apps/ecommerce/product-edit/product-edit.module').then(m => m.ProductEditModule) },
  { path: 'projects', loadChildren: () => import('./demo/apps/ecommerce/projects/projects.module').then(m => m.ProjectsModule) },
  { path: 'alerts', loadChildren: () => import('./demo/comp/ui/alerts/alerts.module').then(m => m.AlertsModule) },
  { path: 'buttons', loadChildren: () => import('./demo/comp/ui/buttons/buttons.module').then(m => m.ButtonsModule) },
  { path: 'cards', loadChildren: () => import('./demo/comp/ui/cards/cards.module').then(m => m.CardsModule) },
  { path: 'carousel', loadChildren: () => import('./demo/comp/ui/carousel/carousel.module').then(m => m.CarouselModule) },
  { path: 'generalui', loadChildren: () => import('./demo/comp/ui/generalui/generalui.module').then(m => m.GeneraluiModule) },
  { path: 'grid', loadChildren: () => import('./demo/comp/ui/grid/grid.module').then(m => m.GridModule) },
  { path: 'felement', loadChildren: () => import('./demo/comp/forms/felement/felement.module').then(m => m.FelementModule) },
  { path: 'fvalid', loadChildren: () => import('./demo/comp/forms/fvalid/fvalid.module').then(m => m.FvalidModule) },
  { path: 'fadvanced', loadChildren: () => import('./demo/comp/forms/fadvanced/fadvanced.module').then(m => m.FadvancedModule) },
  { path: 'apex', loadChildren: () => import('./demo/comp/charts/apex/apex.module').then(m => m.ApexModule) },
  { path: 'echart', loadChildren: () => import('./demo/comp/charts/echart/echart.module').then(m => m.EchartModule) },
  { path: 'morchart', loadChildren: () => import('./demo/comp/charts/morchart/morchart.module').then(m => m.MorchartModule) },
  { path: 'charchart', loadChildren: () => import('./demo/comp/charts/charchart/charchart.module').then(m => m.CharchartModule) },
  { path: 'basict', loadChildren: () => import('./demo/comp/tables/basict/basict.module').then(m => m.BasictModule) },
  { path: 'tabledat', loadChildren: () => import('./demo/comp/tables/tabledat/tabledat.module').then(m => m.TabledatModule) },
  { path: 'tableres', loadChildren: () => import('./demo/comp/tables/tableres/tableres.module').then(m => m.TableresModule) },
  { path: 'tabledit', loadChildren: () => import('./demo/comp/tables/tabledit/tabledit.module').then(m => m.TableditModule) },
  { path: 'md', loadChildren: () => import('./demo/comp/icons/md/md.module').then(m => m.MdModule) },
  { path: 'fontaw', loadChildren: () => import('./demo/comp/icons/fontaw/fontaw.module').then(m => m.FontawModule) },
  { path: 'themify', loadChildren: () => import('./demo/comp/icons/themify/themify.module').then(m => m.ThemifyModule) },
  { path: 'ion', loadChildren: () => import('./demo/comp/icons/ion/ion.module').then(m => m.IonModule) },
  { path: 'googlemap', loadChildren: () => import('./demo/comp/maps/googlemap/googlemap.module').then(m => m.GooglemapModule) },
  { path: 'vector', loadChildren: () => import('./demo/comp/maps/vector/vector.module').then(m => m.VectorModule) },
  { path: 'blank', loadChildren: () => import('./demo/pagenew/extra/blank/blank.module').then(m => m.BlankModule) },
  { path: 'timeline', loadChildren: () => import('./demo/pagenew/extra/timeline/timeline.module').then(m => m.TimelineModule) },
  { path: 'invoice', loadChildren: () => import('./demo/pagenew/extra/invoice/invoice.module').then(m => m.InvoiceModule) },
  { path: 'pricing', loadChildren: () => import('./demo/pagenew/extra/pricing/pricing.module').then(m => m.PricingModule) },
  { path: 'faq', loadChildren: () => import('./demo/pagenew/extra/faq/faq.module').then(m => m.FaqModule) },
  { path: 'emailbasic', loadChildren: () => import('./demo/pagenew/templates/emailbasic/emailbasic.module').then(m => m.EmailbasicModule) },
  { path: 'emailalert', loadChildren: () => import('./demo/pagenew/templates/emailalert/emailalert.module').then(m => m.EmailalertModule) },
  { path: 'emailbilling', loadChildren: () => import('./demo/pagenew/templates/emailbilling/emailbilling.module').then(m => m.EmailbillingModule) },
  { path: 'recover', loadChildren: () => import('./demo/OtherPages/other-p/recover/recover.module').then(m => m.RecoverModule) },
  { path: 'lock', loadChildren: () => import('./demo/OtherPages/other-p/lock/lock.module').then(m => m.LockModule) },
  { path: 'maintenance', loadChildren: () => import('./demo/OtherPages/other-p/maintenance/maintenance.module').then(m => m.MaintenanceModule) },
  { path: 'e404', loadChildren: () => import('./demo/OtherPages/other-p/e404/e404.module').then(m => m.E404Module) },
  { path: 'e500', loadChildren: () => import('./demo/OtherPages/other-p/e500/e500.module').then(m => m.E500Module) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
