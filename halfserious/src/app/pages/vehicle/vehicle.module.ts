import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VehiclePage } from "./vehicle";
import { VehiclePageRoutingModule } from './vehicle-routing.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    VehiclePageRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [VehiclePage],
  entryComponents: [],
})
export class VehicleModule {}
