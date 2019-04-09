import { Component, OnInit } from '@angular/core';

import { Hero } from '../classes/hero';
import { HEROES } from '../mocks/mock-heroes';

@Component({
	selector: 'heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	heroes = HEROES;
	selectedHero: Hero;
	hero: Hero = {
		id: 1,
		name: 'windstorm',
	};

	constructor() { }

	ngOnInit() {
	}

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

}
