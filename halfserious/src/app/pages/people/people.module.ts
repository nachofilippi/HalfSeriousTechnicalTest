import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PeoplePage } from './people';
import { PeoplePageRoutingModule } from './people-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PeoplePageRoutingModule,
  ],
  declarations: [
    PeoplePage
  ],
  entryComponents: [
  ]
})
export class PeopleModule { }
