import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'pet',
    loadChildren: () => import('./pet/pet.module').then( m => m.PetPageModule)
  },
  {
    path: 'tics',
    loadChildren: () => import('./ProgramasEducativos/tics/tics.module').then( m => m.TicsPageModule)
  },
  {
    path: 'mantenimiento',
    loadChildren: () => import('./ProgramasEducativos/mantenimiento/mantenimiento.module').then( m => m.MantenimientoPageModule)
  },
  {
    path: 'desarollode-negocios',
    loadChildren: () => import('./ProgramasEducativos/desarollode-negocios/desarollode-negocios.module').then( m => m.DesarollodeNegociosPageModule)
  },
  {
    path: 'procesos-industriales',
    loadChildren: () => import('./ProgramasEducativos/procesos-industriales/procesos-industriales.module').then( m => m.ProcesosIndustrialesPageModule)
  },
  {
    path: 'home-tepetitlan',
    loadChildren: () => import('./home-tepetitlan/home-tepetitlan.module').then( m => m.HomeTepetitlanPageModule)
  },
  {
    path: 'home-chapulhuacan',
    loadChildren: () => import('./home-chapulhuacan/home-chapulhuacan.module').then( m => m.HomeChapulhuacanPageModule)
  },
  {
    path: 'home-mixto',
    loadChildren: () => import('./home-mixto/home-mixto.module').then( m => m.HomeMixtoPageModule)
  },
  {
    path: 'home-maestrias',
    loadChildren: () => import('./home-maestrias/home-maestrias.module').then( m => m.HomeMaestriasPageModule)
  },  {
    path: 'modal-tics',
    loadChildren: () => import('./modales/modal-tics/modal-tics.module').then( m => m.ModalTicsPageModule)
  },
  {
    path: 'modal-mantenimiento',
    loadChildren: () => import('./modales/modal-mantenimiento/modal-mantenimiento.module').then( m => m.ModalMantenimientoPageModule)
  },



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
