import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {PorPaisComponent} from "./pais/pages/por-pais/por-pais.component";
import {PorRegionComponent} from "./pais/pages/por-region/por-region.component";
import {PorCapitalComponent} from "./pais/pages/por-capital/por-capital.component";
import {VerPaisComponent} from "./pais/pages/ver-pais/ver-pais.component";

// Declarar arreglo de rutas principales de la aplicación
const routes: Routes = [
  // Cada ruta es un objeto, que incluye el path, componente asociado, y la forma de en que se localizará esa ruta
  {
    path: '',
    component: PorPaisComponent,
    pathMatch: 'full',

  },
  {
    path: 'region',
    component: PorRegionComponent
  },
  {
    path: 'capital',
    component: PorCapitalComponent
  },
  // :param nos permite pasar parametros dinámicos a las rutas
  {
    path: 'pais/:id',
    component: VerPaisComponent
  },
  // Cuando el path no coincide con las rutas anteriores se activa esta ruta
  {
    path: '**',
    redirectTo: ''
  }
];

// El sistema de rutas es un modulo normal de Angular, donde se debe especificar que importa y exporta el modulo de rutas,
@NgModule({
  imports: [
    // Solo se puede registrar un esquema de rutas principales para la aplicación, el resto son rutas hijas
    RouterModule.forRoot(routes),
  ],
  exports: [
    // Se debe exportar este modulo para que este disponible en el modulo principal y se tenga acceso
    // a otros componentes relacionados como RouterLink, RouterOutlet, entre otros
    // Si estos componentes son declarados en otros componentes que no estan ligados directamente con el modulo principal,
    // se deberá importar RotuerModulo en el respectivo modulo que los gestiona
    RouterModule,
  ],
})
export class AppRoutingModule { }
