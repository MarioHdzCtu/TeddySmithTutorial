import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


interface IPokemon  {
  id : number,
  name : string,
  type: string,
  isCool: boolean,
  isStylish: boolean
}


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent {
  pokemons : IPokemon[];
  constructor(){
   
    this.pokemons = 
    [
      {
        id: 1,
        name: 'pikachu',
        type: 'electric',
        isCool: true,
        isStylish: false
      },
      {
        id:2,
        name: 'squirtle',
        type: 'water',
        isCool: false,
        isStylish: true
      }
    ]

  }
}
