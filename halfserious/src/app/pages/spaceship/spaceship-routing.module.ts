import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpaceshipPage } from './spaceship';

const routes: Routes = [
  {
    path: '',
    component: SpaceshipPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SpaceshipPageRoutingModule { }
