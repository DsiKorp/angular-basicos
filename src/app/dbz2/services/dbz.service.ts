import { Injectable } from "@angular/core";
import { Personaje } from "../interfaces/dbz.interface";

@Injectable()
export class DbzService {

    private _personajes: Personaje[] = [
        {
          nombre: 'Jacinto',
          poder: 5
        }, 
        {
          nombre: 'Ferina',
          poder: 6
        }
      ];

    get personajes(): Personaje[] {
        return [...this._personajes];
    }

    constructor() {
        console.log('Constructor Servicio');
    }

    agregarPersonaje(personaje: Personaje) {
        this._personajes.push(personaje);
    }
}