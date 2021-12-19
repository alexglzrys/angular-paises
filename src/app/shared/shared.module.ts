import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import {RouterModule} from "@angular/router";



@NgModule({
  declarations: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    // Es necesario importar el RouterModule si los componentes de este modulo ocuparán
    // RouterLink, RouterLinkActive, RouterLinkActiveOptions
    // No funcionará aunque este se importe en el modulo principal. Pues solo funcionará para los componentes que gestiona ese modulo principal (AppComponent)
    // Tiene que importarse en el modulo especifico que gestiona los componentes que lo ocuparán
    RouterModule,
  ],
  exports: [
    SidebarComponent,
  ]
})
export class SharedModule { }
