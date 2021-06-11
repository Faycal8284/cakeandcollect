import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'accueil',
        loadChildren: () => import('../pages/accueil/accueil.module').then(m => m.AccueilPageModule)
      },
      /* {
        path: 'offers',
        loadChildren: () => import('../pages/offers/offers.module').then(m => m.OffersModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('../pages/profile/profile.module').then(m => m.ProfileModule)
      }, */
      {
        path: 'categories',
        loadChildren: () => import('../pages/categories/categories.module').then(m => m.CategoriesPageModule)
      },
      {
        path: 'vendeurs',
        loadChildren: () => import('../pages/vendeurs/vendeurs.module').then(m => m.VendeursPageModule)
      },
      {
        path: 'recherche',
        loadChildren: () => import('../pages/recherche/recherche.module').then(m => m.RecherchePageModule)
      },
      {
        path: 'panier',
        loadChildren: () => import('../pages/panier/panier.module').then(m => m.PanierPageModule)
      },
     /*  {
        path: 'commandes',
        loadChildren: () => import('../pages/commandes/commandes.module').then(m => m.commandesModule)
      }, */
      {
        path: '',
        redirectTo: '/tabs/accueil',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/accueil',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule { }

