import { Component, OnInit } from '@angular/core';

import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	heroes: Hero[] = [];

	constructor(
		private service: HeroService,
	) { }

	ngOnInit() {
		this.getHeroes()
	}

	getHeroes() {
		this.service.getHeroes()
			.subscribe(response => {
				this.heroes = response.slice(1, 5).map(hero => {
					return {
						id: Number(hero.id),
						name: hero.name,
					};
				})
			})
	}

}
