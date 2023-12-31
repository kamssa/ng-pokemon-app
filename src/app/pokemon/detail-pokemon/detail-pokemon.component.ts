import { Component, OnInit } from '@angular/core';
import { POKEMONS } from '../mock-pokemons';
import { Pokemon } from '../Pokemon';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: [
  ]
})
export class DetailPokemonComponent implements OnInit {
  pokemonList :Pokemon [];
  pokemon: Pokemon | undefined;
constructor(private route: ActivatedRoute, 
  private router: Router, private pokemonService: PokemonService){

}

  ngOnInit(): void {
    const pokemonId : String | null = this.route.snapshot.paramMap.get('id');
   
    if(pokemonId){
      this.pokemon = this.pokemonService.getPokemonById(+pokemonId);
    }
  }
  gotoPokemonsList(){
 this.router.navigate(['/pokemons']);
  }
}
