import { Component } from '@angular/core';
import { FormControl } from "@angular/forms";
import { Hero } from "../../interfaces/hero.interface";
import { HeroesService } from "../../services/heroes.service";
import { MatAutocompleteSelectedEvent } from "@angular/material/autocomplete";

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public heroes: Hero[] = [];
  public selectedHero: Hero | undefined;


  constructor(private heroesService: HeroesService) {
  }

  searchHero() {
    const value: string = this.searchInput.value || '';
    // console.log(value);
    this.heroesService.getSuggestions(value)
      .subscribe(heroes => this.heroes = heroes);
  }


  // onSelectedOption(event: MatAutocompleteSelectedEvent): void {
  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    console.log(event)
    if (!event.option.value) {
      this.selectedHero = undefined;
      return;
    }
    const hero: Hero = event.option.value as Hero;
    this.searchInput.setValue(hero.superhero)

    this.selectedHero = hero;
    // console.log({event.this.o});
  }
}
