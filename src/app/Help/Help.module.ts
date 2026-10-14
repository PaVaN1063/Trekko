import { IonicModule } from '@ionic/angular';
import { SharedModule } from '../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HelpPage } from './Help.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { HelpPageRoutingModule } from './Help-routing.module';

@NgModule({
  imports: [
    SharedModule,
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    HelpPageRoutingModule
  ],
  declarations: [HelpPage]
})
export class HelpPageModule {}
