import { Component, Input, OnInit } from '@angular/core';
import { Personaje } from 'src/app/dbz2/interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html'
})
export class PersonajesComponent {
  // este input van a venir desde el componente padre, data es un alias
  //@Input('data') personajes: any[] = [];
  //@Input() personajes: Personaje[] = [];

  constructor(private dbzService: DbzService) {
    
  }

  get personajes() {
    return this.dbzService.personajes;
  }

}
