import { Component, OnInit } from '@angular/core';

import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
	heroes: Hero[];

	constructor(
		private service: HeroService,
	) {}

	ngOnInit() {
		this.getHeroes();
	}

	getHeroes() {
		this.service.getHeroes()
			.subscribe(response => {
				this.heroes = response.map(hero => {
					return {
						id: Number(hero.id),
						name: hero.name,
					};
				});
			})
	}

}
