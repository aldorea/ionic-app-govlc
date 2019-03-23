import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PlacesPage } from './places.page';



const routes: Routes = [
  {
      path: 'tabs',
      component: PlacesPage,
      children: [
          {
              path: 'monuments',
              children: [
                {
                  path: '',
                  loadChildren: './monuments/monuments.module#MonumentsPageModule'
                },
              ]
          },
          {
            path: '',
            redirectTo: '/places/tabs/monuments',
            pathMatch: 'full'
          }
      ]
  },
  {
    path: '',
    redirectTo: '/places/tabs/monuments',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlacesRoutingModule {}
