import { POKEMONS } from './../models/pokedex';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  pokemons = POKEMONS;

  constructor() { }

  ngOnInit(): void {
  }

}
