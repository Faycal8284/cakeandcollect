import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'accueil',
    loadChildren: () => import('./pages/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'login-vendeur',
    loadChildren: () => import('./pages/vendeur/login-vendeur/login-vendeur.module').then( m => m.LoginVendeurPageModule)
  },
  {
    path: 'espace-vendeur/:id',
    loadChildren: () => import('./pages/vendeur/espace-vendeur/espace-vendeur.module').then( m => m.EspaceVendeurPageModule)
  },
  {
    path: 'login-client',
    loadChildren: () => import('./pages/client/login-client/login-client.module').then( m => m.LoginClientPageModule)
  },
  {
    path: 'espace-client/:id',
    loadChildren: () => import('./pages/client/espace-client/espace-client.module').then( m => m.EspaceClientPageModule)
  },
  {
    path: 'register-vendeur',
    loadChildren: () => import('./pages/vendeur/register-vendeur/register-vendeur.module').then( m => m.RegisterVendeurPageModule)
  },
  {
    path: 'categories',
    loadChildren: () => import('./pages/categories/categories.module').then( m => m.CategoriesPageModule)
  },
  {
    path: 'recherche',
    loadChildren: () => import('./pages/recherche/recherche.module').then( m => m.RecherchePageModule)
  },
  {
    path: 'vendeurs',
    loadChildren: () => import('./pages/vendeurs/vendeurs.module').then( m => m.VendeursPageModule)
  },
  {
    path: 'vendeur-details/:id',
    loadChildren: () => import('./pages/vendeur-details/vendeur-details.module').then( m => m.VendeurDetailsPageModule)
  },  {
    path: 'patisseries',
    loadChildren: () => import('./pages/patisseries/patisseries.module').then( m => m.PatisseriesPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
