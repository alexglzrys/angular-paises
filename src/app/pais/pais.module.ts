import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PorCapitalComponent } from './pages/por-capital/por-capital.component';
import { PorRegionComponent } from './pages/por-region/por-region.component';
import { PorPaisComponent } from './pages/por-pais/por-pais.component';
import { VerPaisComponent } from './pages/ver-pais/ver-pais.component';
import {FormsModule} from "@angular/forms";
import {RouterModule} from "@angular/router";
import { PaisTablaComponent } from './components/pais-tabla/pais-tabla.component';
import { PaisInputComponent } from './components/pais-input/pais-input.component';



@NgModule({
  declarations: [
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent,
    PaisTablaComponent,
    PaisInputComponent
  ],
  imports: [
    CommonModule,
    FormsModule,  // Los componentes de este modulo necesitan trabajar con formularios de angular (ngModel)
    RouterModule, // Los componentes de este módulo necesitan trabajar con RouterLink, RouterLinkActive, etc
  ],
  exports: [
    PorCapitalComponent,
    PorRegionComponent,
    PorPaisComponent,
    VerPaisComponent,
  ]
})
export class PaisModule { }
