import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterPage } from "./character";
import { CharacterPageRoutingModule } from './character-routing.module';

// Material
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  imports: [
    CommonModule,
    CharacterPageRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
  ],
  declarations: [CharacterPage],
  entryComponents: [],
})
export class CharacterModule {}
