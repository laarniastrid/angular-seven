import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../services/messages.service';

@Component({
	selector: 'messages',
	templateUrl: './messages.component.html',
	styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {
	messages: string[] = [];

	constructor(
		private service: MessagesService,
	) { }

	ngOnInit() {
		this.getMessages();
	}
	
	getMessages() {
		this.service.getMessages()
			.subscribe(response => {
				this.messages = response;
			})
	}

}
