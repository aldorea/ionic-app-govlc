import {
  NgModule
} from '@angular/core';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  PlacesPage
} from './places.page';


const routes: Routes = [{
    path: 'tabs',
    component: PlacesPage,
    children: [{
        path: 'monuments',
        children: [{
            path: '',
            loadChildren: './monuments/monuments.module#MonumentsPageModule'
          },
          {
            path: ':id',
            loadChildren: './monuments/monument-detail/monument-detail.module#MonumentDetailPageModule'
          }
          
        ]
      },
      {
        path: '',
        redirectTo: '/places/tabs/monuments',
        pathMatch: 'full'
      },
      {
        path: 'maps',
        loadChildren: './map/map.module#MapPageModule'
      },
      {
        path: 'favorites',
        loadChildren: './favorites/favorites.module#FavoritesPageModule'
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
