import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
})
export class MainPageComponent {
  personajes: Personaje[] = [
    {
      nombre: 'Goku',
      poder: 15500,
    },
    {
      nombre: 'Vegeta',
      poder: 7500,
    },
  ];

  nuevo: Personaje = {
    nombre: 'Bulma',
    poder: 2000,
  };

  agregarNuevoPersonaje(prop: Personaje) {
    this.personajes.push(prop);
  }
}
