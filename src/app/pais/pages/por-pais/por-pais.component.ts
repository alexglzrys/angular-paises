import { Component, OnInit } from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  termino: string = '';
  isError: boolean = false;
  paises: Country[] = [];
  paisesSugeridos: Country[] = [];
  mostrarListadoSugerencias: boolean = false;

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
  }

  mostrarSugerencias(termino: string) {
    // TODO: crear sugerencias
    this.mostrarListadoSugerencias = true;
    this.termino = termino
    console.log('Sugerencias para... ', termino)
    this.paisService.buscarPais(termino).subscribe(paises => {
      // Mostrar solo 5 sugerencias que coincidan con el termino de busqueda
      this.paisesSugeridos = paises.slice(0, 5);
    }, (error) => {
      this.paisesSugeridos = [];
    })
  }

  buscar(termino: string) {
    console.log(termino);
    // Recoger el mensaje enviado por otro componente para realizar la tarea prinicipal, buscar los paises que contengan ese termino
    this.termino = termino;
    this.isError = false;
    this.mostrarListadoSugerencias = false;

    this.paisService.buscarPais(termino).subscribe(paises => {
      // Al tener asociado un tipo de dato en la respuesta, es sencillo acceder a los metodos, o nombre de las propiedades
      console.log(paises);
      this.paises = [...paises];
    }, (error) => {
      console.warn('Error', error)
      this.isError = true;
      this.paises = [];
    })
  }

}
