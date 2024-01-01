import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full'
  },
  {
    path: 'details',
    loadChildren: () => import('./enjoyapp/details/details.module').then( m => m.DetailsPageModule)
  },
  {
    path: 'villes',
    loadChildren: () => import('./enjoyapp/villes/villes.module').then( m => m.VillesPageModule)
  },
  {
    path: 'accueil',
    loadChildren: () => import('./enjoyapp/accueil/accueil.module').then( m => m.AccueilPageModule)
  },
  {
    path: 'connexion',
    loadChildren: () => import('./enjoyapp/connexion/connexion.module').then( m => m.ConnexionPageModule)
  },
  {
    path: 'inscription',
    loadChildren: () => import('./enjoyapp/inscription/inscription.module').then( m => m.InscriptionPageModule)
  },
  {
    path: 'pays',
    loadChildren: () => import('./enjoyapp/pays/pays.module').then( m => m.PaysPageModule)
  },
  {
    path: 'autourdemoi',
    loadChildren: () => import('./enjoyapp/autourdemoi/autourdemoi.module').then( m => m.AutourdemoiPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
