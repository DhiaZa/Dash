import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'alerts',
        loadChildren: () => import('./alerts/alerts.module').then(m => m.AlertsModule)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./buttons/buttons.module').then(m => m.ButtonsModule)
      },
      {
        path: 'cards',
        loadChildren: () => import('./cards/cards.module').then(m => m.CardsModule)
      },
      {
        path: 'carousel',
        loadChildren: () => import('./carousel/carousel.module').then(m => m.CarouselModule)
      },
      {
        path: 'generalui',
        loadChildren: () => import('./generalui/generalui.module').then(m => m.GeneraluiModule)
      },
      {
        path: 'grid',
        loadChildren: () => import('./grid/grid.module').then(m => m.GridModule)
      }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
