import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss'],
})
export class PokedexComponent implements OnInit {
  pokemons: any = [];

  constructor(private http: HttpClient) {
    this.http
      .get('https://pokeapi.co/api/v2/pokemon')
      .toPromise()
      .then((response: any) => {
        this.pokemons = response.results;
      });
  }

  ngOnInit(): void {}
}
