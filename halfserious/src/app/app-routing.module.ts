import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/main-page',
    pathMatch: 'full'
  },
  {
    path: 'main-page',
    loadChildren: () => import('./pages/main-page/main-page.module').then(m => m.MainModule)
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule)
  },
  {
    path: 'spaceship',
    loadChildren: () => import('./pages/spaceship/spaceship.module').then(m => m.SpaceshipModule)
  },
  {
    path: 'vehicle/:id',
    loadChildren: () => import('./pages/vehicle/vehicle.module').then(m => m.VehicleModule)
  },
  {
    path: 'character/:id',
    loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
