import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'Home',
        loadChildren: () =>
          import('../Home/Home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'MyBookings',
        loadChildren: () =>
          import('../MyBookings/MyBookings.module').then(
            (m) => m.MyBookingsPageModule
          ),
      },
      {
        path: 'Help',
        loadChildren: () =>
          import('../Help/Help.module').then((m) => m.HelpPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../Account/Account.module').then((m) => m.AccountPageModule),
      },
      {
        path: '',
        redirectTo: '/Home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: 'tabs',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
