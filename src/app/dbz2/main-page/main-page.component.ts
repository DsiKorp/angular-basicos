import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';


@Component({
  selector: 'app-main-page2',
  templateUrl: './main-page.component.html'
})
export class MainPageComponent {

  //personajes: Personaje[] = [];

  nuevo: Personaje = {
    nombre: '',
    poder: 0
  }

  constructor(
    //private dbzService: DbzService
    ) {
    //this.personajes = this.dbzService.personajes;
  }

  // get personajes(): Personaje[] {
  //   return this.dbzService.personajes;
  // }

  // agregarNuevoPersonaje( argumento: Personaje) {
  //   //debugger;
  //   console.log('agregarNuevoPersonaje: ', argumento);
  //   this.personajes.push(argumento);
  // }



  cambiarNombre(event: any) {
    console.log(`event`, event.target.value);
  }

}
