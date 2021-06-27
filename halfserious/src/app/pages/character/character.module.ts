import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterComponent } from './character.component';
import { CharacterRoutingModule } from './character-routing.module';

@NgModule({
  imports: [
    CommonModule,
    CharacterRoutingModule,
  ],
  declarations: [CharacterComponent,],
  entryComponents: [],
})
export class CharacterModule {}
