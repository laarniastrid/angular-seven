import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
	providedIn: 'root'
})
export class MessagesService {
	messages: string[] = [];

	constructor(
		private db: AngularFireDatabase,
	) {}

	addMessage(message: string) {
		return this.db.list('messages').push(message)
			.then(
				success => console.log('message added'),
				error => console.log('error : ', error)
			)
	}

	getMessages(): Observable<any[]> {
		return this.db.list('messages').valueChanges();
	}

	clearMessages() {
		this.db.list('messages').remove();
	}

}
