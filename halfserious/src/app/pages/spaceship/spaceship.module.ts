import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { SpaceshipPage } from './spaceship';
import { SpaceshipPageRoutingModule } from './spaceship-routing.module';

@NgModule({
  imports: [
    CommonModule,
    SpaceshipPageRoutingModule,
    MatPaginatorModule,
    MatTableModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [SpaceshipPage],
  entryComponents: [],
})
export class SpaceshipModule {}
