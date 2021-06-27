import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/people',
    pathMatch: 'full'
  },
  {
    path: 'people',
    loadChildren: () => import('./pages/people/people.module').then(m => m.PeopleModule)
  },
  // {
  //   path: 'character',
  //   loadChildren: () => import('./pages/character/character.module').then(m => m.CharacterModule)
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
