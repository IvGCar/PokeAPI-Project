import { Component, Input, OnInit } from '@angular/core';
import { PokemonDetails } from 'src/app/Models/pokemon-details.model';
import { Pokemon } from 'src/app/Models/pokemon.model';
import { PokeapiService } from 'src/app/services/pokeapi.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'poke-details',
    templateUrl: './pokemon-details.component.html',
    styleUrls: ['./pokemon-details.component.scss']
})
export class PokemonDetailsComponent implements OnInit {

    pokemonDetails: PokemonDetails = new PokemonDetails;

    constructor(private route: ActivatedRoute, private pokeService: PokeapiService) {}    
 
    ngOnInit(): void {
        const currentPokeName = this.route.snapshot.paramMap.get('id');
        if(currentPokeName){
            this.pokeService.GetPokemonByName(currentPokeName)
            .subscribe(pokemonResult => this.pokemonDetails = pokemonResult);
        }
    }

}
