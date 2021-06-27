import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VehiclePage } from "./vehicle";

const routes: Routes = [
  {
    path: '',
    component: VehiclePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VehiclePageRoutingModule { }
