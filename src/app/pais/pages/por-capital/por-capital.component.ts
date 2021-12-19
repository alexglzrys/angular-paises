import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  paises: Country[] = [];

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  buscar(termino: string) {
    this.termino = termino;
    this.isError = false;
    this.paisService.buscarCapital(this.termino)
        .subscribe(paises => {
          this.paises = paises
        }, (error) => {
          this.isError = true;
          this.paises = [];
        })
  }

  mostrarSugerencias(termino: string) {
    console.log('Buscar sugerencias para: ', termino)
  }

}
