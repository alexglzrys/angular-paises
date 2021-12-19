import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {PaisService} from "../../services/pais.service";
import {Country} from "../../interfaces/pais";
import {Subject} from "rxjs";
import {debounceTime} from "rxjs/operators";

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.css']
})
export class PaisInputComponent implements OnInit {

  @Input() placeholder: string = '';

  @Output() onBuscarTermino: EventEmitter<string> = new EventEmitter<string>()
  @Output() onDebounce: EventEmitter<string> = new EventEmitter<string>() // Generar un evento personalizado para retardar la busqueda de un termino y poder ofrecer sugerencias al usuario

  termino: string = '';
  // Crear un Observable (observado) y un Observer (observador) a la vez para detectar cuando el usuario a dejado de escribir
  debouncer: Subject<string> = new Subject<string>();

  constructor(private paisService: PaisService) { }

  ngOnInit(): void {
    // Suscribirme al observable desde el primer momento que se crea este componente
    // Sin embargo me interesa transformar la información que llega con un pipe, para retardar su impresion en consola
    this.debouncer
        .pipe(debounceTime(400))
        .subscribe(terminoValor => {
          console.log('debouncer a llegado algo nuevo: ', terminoValor )
          // En este punto emitimos el evento personalizado para que se comience a buscar
          // Realmente lo que se hace aqui es retardar la busqueda para que aparezcan sugerencias
          this.onDebounce.emit(terminoValor)
        })
  }

  teclaPresionada() {
    // No hay necesidad de inspeccionar el evento y recuperar el valor del componente, pues esta vinculado con el modelo "termino"
    console.log('tecla presionada: ', this.termino)

    // Emitir un dato mediante mi observador (como el valor cambia, al estar suscrito, tambien se recibirá ese nuevo valor)
    this.debouncer.next(this.termino)
  }

  buscar() {
    // Emitir un evento al componente padre para que localice el término buscado mediante el servicio de buscar pais
    // Elevar el estado de este componente al padre. Su función no es buscar, solo es recoger el termino para que otro componente muestre el resultado
    this.onBuscarTermino.emit(this.termino)
  }

}
