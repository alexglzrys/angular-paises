import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {PaisService} from "../../services/pais.service";
import {switchMap, tap} from "rxjs/operators";
import {Country} from "../../interfaces/pais";

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.css']
})
export class VerPaisComponent implements OnInit {

  // TS confía en mí el país, es posible que en este momento el pais sea nulo o indefinido
  pais!: Country

  constructor(private activatedRoute: ActivatedRoute,
              private paisService: PaisService) { }

  ngOnInit(): void {
    this.localizarPais()
  }

  localizarPais() {
    // Suscribirme al cambio de parametro de URL, para localizar la nueva info

    // params.suscribe() = Si tenemos la intensión de actualizar el parametro de url dentro del mismo componente
    // params.snapshot() = Si no tengo la intensión de actualizar el parametro de url dentro del mismo componente (si llegara a cambiar no se obtendría el nuevo valor)
    /*this.activatedRoute.params
        .subscribe(({ id }) => {
          console.log('Código de Pais localizado', id)
          this.paisService.detallePais(id).subscribe(pais => {
            console.log(pais)
          }, (error) => {
            console.log(error)
          })
        }, (error) => {
          console.log(error)
        })*/

    // Hacer la consulta anterior con operadores RJX.
    // SwitchMap toma un observable y retorna un nuevo observable
    // En este caso entra el valor del paramURL, y se retorna los detalles del pais
    // Tap toma un el resultado de un observable y lo imprime en consola
    this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.paisService.detallePais(id)),
          tap(console.log)
        )
        .subscribe(pais => {
          this.pais = pais
        })
  }

}
