import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'places', pathMatch: 'full' },
  { path: 'places', loadChildren: './places/places.module#PlacesPageModule' },
  { path: 'map', redirectTo: 'maps', pathMatch: 'full'},
  { path: '**', redirectTo: 'places'}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
