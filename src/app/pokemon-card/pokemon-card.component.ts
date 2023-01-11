import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss'],
})
export class PokemonCardComponent implements OnInit {
  @Input() pokemon: any;

  pokemonName: any;
  pokemonAtk: any;
  pokemonDefense: any;
  pokemonTypes: any = [];
  pokemonImage: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http
      .get(this.pokemon.url)
      .toPromise()
      .then((data: any) => {
        console.log(data);
        this.pokemonName = data.name;
        this.pokemonAtk = data.stats.filter(
          (stat: any) => stat.stat.name == 'attack'
        )[0].base_stat;
        this.pokemonDefense = data.stats.filter(
          (stat: any) => stat.stat.name == 'defense'
        )[0].base_stat;
        this.pokemonTypes = data.types;
        console.log(this.pokemonAtk);

        this.pokemonImage = data.sprites.other.dream_world.front_default;
      });
  }
}
