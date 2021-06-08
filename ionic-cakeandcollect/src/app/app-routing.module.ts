import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ClientGuard } from './guards/client.guard';

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
  },
  {
    path: 'categorie/:id',
    loadChildren: () => import('./pages/categorie/categorie.module').then( m => m.CategoriePageModule)
  },
  {
    path: 'patisseries',
    loadChildren: () => import('./pages/patisseries/patisseries.module').then( m => m.PatisseriesPageModule)
  },
  {
    path: 'patisserie/:id',
    loadChildren: () => import('./pages/patisserie/patisserie.module').then( m => m.PatisseriePageModule)
  },
  {
    path: 'panier',
    loadChildren: () => import('./pages/panier/panier.module').then( m => m.PanierPageModule)
  },
  {
    path: 'client',
    loadChildren: () => import('./auth-screens/client/client.module').then( m => m.ClientPageModule)
  },
  {
    path: 'auth-screen-client',
    loadChildren: () => import('./auth-screens/auth-screen-client/auth-screen-client.module').then( m => m.AuthScreenClientPageModule),
    canLoad: [ClientGuard]
  },
  {
    path: 'tableau-de-bord-client',
    loadChildren: () => import('./pages/client/tableau-de-bord/tableau-de-bord.module').then( m => m.TableauDeBordPageModule)
  },


  /* {
    path: 'auth-screen',
    loadChildren: () => import('./auth-screens/client/client.module').then( m => m.ClientPageModule)
  }, */


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
