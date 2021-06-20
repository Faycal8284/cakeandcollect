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
  {
    path: 'register-client',
    loadChildren: () => import('./pages/client/register-client/register-client.module').then( m => m.RegisterClientPageModule)
  },
  {
    path: 'mes-patisseries/:id',
    loadChildren: () => import('./pages/vendeur/patisseries/patisseries.module').then( m => m.PatisseriesPageModule)
  },
  {
    path: 'ajouter-patisserie/:id',
    loadChildren: () => import('./pages/vendeur/add-patisserie/add-patisserie.module').then( m => m.AddPatisseriePageModule)
  },
  {
    path: 'edit-patisserie/:id',
    loadChildren: () => import('./pages/vendeur/edit-patisserie/edit-patisserie.module').then( m => m.EditPatisseriePageModule)
  },
  {
    path: 'changer-motdepasse-client/:id',
    loadChildren: () => import('./pages/client/changer-motdepasse/changer-motdepasse.module').then( m => m.ChangerMotdepassePageModule)
  },
  {
    path: 'changer-motdepasse-vendeur/:id',
    loadChildren: () => import('./pages/vendeur/changer-motdepasse/changer-motdepasse.module').then( m => m.ChangerMotdepassePageModule)
  },
  {
    path: 'mode-de-paiement',
    loadChildren: () => import('./pages/client/mode-de-paiement/mode-de-paiement.module').then( m => m.ModeDePaiementPageModule)
  },
  {
    path: 'device-information/:id',
    loadChildren: () => import('./pages/client/device-information/device-information.module').then( m => m.DeviceInformationPageModule)
  },
  {
    path: 'tests',
    loadChildren: () => import('./pages/tests/tests.module').then( m => m.TestsPageModule)
  },
  {
    path: 'upload',
    loadChildren: () => import('./pages/upload/upload.module').then( m => m.UploadPageModule)
  },
  {
    path: 'profil-vendeur/:id',
    loadChildren: () => import('./pages/vendeur/profil-vendeur/profil-vendeur.module').then( m => m.ProfilVendeurPageModule)
  },
  {
    path: 'profil-client/:id',
    loadChildren: () => import('./pages/client/profil-client/profil-client.module').then( m => m.ProfilClientPageModule)
  },
  {
    path: 'parametres/:id',
    loadChildren: () => import('./pages/client/parametres/parametres.module').then( m => m.ParametresPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
