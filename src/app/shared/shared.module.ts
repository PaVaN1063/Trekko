import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';

import { InrPipe } from './inr.pipe';
import { AbHeaderComponent } from './components/ab-header.component';
import { TrekCardComponent } from './components/trek-card.component';
import { TrekListComponent } from './components/trek-list.component';
import { AbLogoComponent } from './components/ab-logo.component';

/** Common building blocks for every redesigned screen. */
@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule],
  declarations: [InrPipe, AbHeaderComponent, TrekCardComponent, TrekListComponent, AbLogoComponent],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule,
    InrPipe,
    AbHeaderComponent,
    TrekCardComponent,
    TrekListComponent,
    AbLogoComponent,
  ],
})
export class SharedModule {}
