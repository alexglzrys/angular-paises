import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  regiones: string[] = ['Africa', 'Americas', 'Asia', 'Europe', 'Oceania'];
  regionActiva: string = '';
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  activarRegion(region: string) {
    // Buscar paises solo si la region es diferente a la actual
    if (region === this.regionActiva) return;

    this.regionActiva = region
    this.paises = []

    // Solicitar el listado de paises asociados con la región seleccionada
    this.paisService.buscarPaisesPorRegion(region)
        .subscribe(paises => {
          this.paises = paises;
        }, (error) => {
          this.paises = [];
        })
  }

  getClassActive(region: string) {
    // Colocar una u otra clase con base en una condición (IF ELSE)
    return region === this.regionActiva ? 'btn btn-primary' : 'btn btn-outline-primary';


  }

}
