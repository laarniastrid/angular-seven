import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero } from '../classes/hero';
import { HeroService } from '../services/hero.service';

@Component({
	selector: 'hero-detail',
	templateUrl: './hero-detail.component.html',
	styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
	@Input() hero: Hero;

	constructor(
		private route: ActivatedRoute,
		private location: Location,
		private service: HeroService,
	) { }

	ngOnInit() {
	}

}
