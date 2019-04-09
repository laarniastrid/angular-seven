import { Injectable, OnInit } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';
import { Observable } from 'rxjs';

import { MessagesService } from './messages.service';

@Injectable({
	providedIn: 'root'
})
export class HeroService {

	constructor(
		private db: AngularFireDatabase,
		private messages: MessagesService,
	) {}

	getHeroes(): Observable<any[]> {
		this.messages.addMessage('heroservice: fetched heroes');
		return this.db.list('heroes').valueChanges();
	}

}
