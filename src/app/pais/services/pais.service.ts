import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Country} from "../interfaces/pais";

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  //private _apiURL: string = 'https://restcountries.eu/rest/v2';
  private _apiURL: string = 'https://restcountries.com/v2';

  constructor(private http: HttpClient) { }

  get httpParams() {
    // Dependiendo del diseño de la API, podemos especificar que campos necesitamos como respuesta para hacerlas más ligeras en cuanto a peso
    // No es necesario traer todos los datos, si solo necesitamos pintar algunos de ellos
    return new HttpParams().set('fields', 'name,capital,flags,population,alpha3Code');
  }

  buscarPais(termino: string): Observable<Country[]> {
    const URL = `${this._apiURL}/name/${termino}`;
    // Las peticiones GET retornan una respuesta generica, por tanto, es importante especificar el tipo mediante
    // una interfaz, y si la data es una entidad o un conjunto de ellas
    return this.http.get<Country[]>(URL, {params: this.httpParams});
  }

  buscarCapital(termino: string): Observable<Country[]> {
    const URL = `${this._apiURL}/capital/${termino}`;
    return this.http.get<Country[]>(URL, {params: this.httpParams});
  }

  detallePais(codigo: string): Observable<Country> {
    const URL = `${this._apiURL}/alpha/${codigo}`;
    return this.http.get<Country>(URL);
  }

  buscarPaisesPorRegion(region: string): Observable<Country[]> {
    const URL = `${this._apiURL}/region/${region.toLowerCase()}`;
    return this.http.get<Country[]>(URL, {params: this.httpParams});
  }
}
