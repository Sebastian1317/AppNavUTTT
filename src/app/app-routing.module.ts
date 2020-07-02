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
  },
  {
    path: 'modal-tics',
    loadChildren: () => import('./modales/modal-tics/modal-tics.module').then( m => m.ModalTicsPageModule)
  },
  {
    path: 'modal-mantenimiento',
    loadChildren: () => import('./modales/modal-mantenimiento/modal-mantenimiento.module').then( m => m.ModalMantenimientoPageModule)
  },
  {
    path: 'quimica',
    loadChildren: () => import('./ProgramasEducativos/quimica/quimica.module').then( m => m.QuimicaPageModule)
  },
  {
    path: 'energias',
    loadChildren: () => import('./ProgramasEducativos/energias/energias.module').then( m => m.EnergiasPageModule)

  },
  {
    path: 'renovables',
    loadChildren: () => import('./modales/renovables/renovables.module').then( m => m.RenovablesPageModule)
  },
  {
    path: 'contaduria',
    loadChildren: () => import('./ProgramasEducativos/contaduria/contaduria.module').then( m => m.ContaduriaPageModule)
  },
  {
    path: 'capitalhumano',
    loadChildren: () => import('./ProgramasEducativos/capitalhumano/capitalhumano.module').then( m => m.CapitalhumanoPageModule)
  },
  {
    path: 'conta',
    loadChildren: () => import('./modales/conta/conta.module').then( m => m.ContaPageModule)
  },
  {
    path: 'humano',
    loadChildren: () => import('./modales/humano/humano.module').then( m => m.HumanoPageModule)
  },
  {
    path: 'formacionproyectos',
    loadChildren: () => import('./ProgramasEducativos/formacionproyectos/formacionproyectos.module').then( m => m.FormacionproyectosPageModule)
  },
  {
    path: 'proyectos',
    loadChildren: () => import('./modales/proyectos/proyectos.module').then( m => m.ProyectosPageModule)
  },
{
    path: 'mecatronica',
    loadChildren: () => import('./ProgramasEducativos/mecatronica/mecatronica.module').then( m => m.MecatronicaPageModule)
  },
  {
    path: 'contaduria',
    loadChildren: () => import('./home-tepetitlan/contaduria/contaduria.module').then( m => m.ContaduriaPageModule)
  },
  {
    path: 'quimica',
    loadChildren: () => import('./modales/quimica/quimica.module').then( m => m.QuimicaPageModule)
  },
  {
    path: 'humano',
    loadChildren: () => import('./modales/humano/humano.module').then( m => m.HumanoPageModule)
  },
  {
    path: 'desarollode-negocios',
    loadChildren: () => import('./modales/modal-desarollo/modal-desarollo.module').then( m => m.ModalDesarolloPageModule)
  },
  {
    path: 'mecatronica',
    loadChildren: () => import('./ProgramasEducativos/mecatronica/mecatronica.module').then( m => m.MecatronicaPageModule)
  },
  {
    path: 'contaduria',
    loadChildren: () => import('./home-tepetitlan/contaduria/contaduria.module').then( m => m.ContaduriaPageModule)
  },
  {
    path: 'instalaciones',
    loadChildren: () => import('./modales/mecatronica/instalaciones/instalaciones.module').then( m => m.InstalacionesPageModule)
  },
  {
    path: 'robotica',
    loadChildren: () => import('./modales/mecatronica/robotica/robotica.module').then( m => m.RoboticaPageModule)
  },
  {
    path: 'automatizacion',
    loadChildren: () => import('./modales/mecatronica/automatizacion/automatizacion.module').then( m => m.AutomatizacionPageModule)
  },

 
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
