import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPage } from "./main-page";
import { MainPageRoutingModule } from './main-page-routing.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    MainPageRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [MainPage],
  entryComponents: [],
})
export class MainModule {}
