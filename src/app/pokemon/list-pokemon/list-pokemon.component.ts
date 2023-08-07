import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../Pokemon';
import { Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: [
  ]
})
export class ListPokemonComponent implements OnInit{
  pokemonList :Pokemon [] ;
  pokemon: Pokemon;
  constructor(private router: Router, private pokemonService: PokemonService){

  }
  ngOnInit(): void {
 this.pokemonList = this.pokemonService.getPokemonList();
  }
  gotoPokemon(pokemon: Pokemon){
    this.router.navigate(['/pokemon', pokemon.id]);
  }
}
