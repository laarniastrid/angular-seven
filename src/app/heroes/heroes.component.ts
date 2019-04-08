import { Component, OnInit } from '@angular/core';
import { Hero } from '../classes/hero';

@Component({
	selector: 'heroes',
	templateUrl: './heroes.component.html',
	styleUrls: ['./heroes.component.sass']
})
export class HeroesComponent implements OnInit {
	hero: Hero = {
		id: 1,
		name: 'windstorm',
	};

	constructor() { }

	ngOnInit() {
	}

}
