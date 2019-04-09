import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';

@NgModule({
	declarations: [
		AppComponent,
		HeroesComponent,
		HeroDetailComponent,
	],
	imports: [
		AngularFireModule.initializeApp(environment.firebase),
		AngularFirestoreModule,
		BrowserModule,
		FormsModule,
	],
	providers: [],
	bootstrap: [
		AppComponent,]
})
export class AppModule { }
