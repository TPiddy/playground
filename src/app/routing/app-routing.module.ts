import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';
import {HomeComponent} from "../home/home.component";
import {MenuComponent} from "../menu/menu.component";
import {AboutComponent} from "../about/about.component";
import {ContactComponent} from "../contact/contact.component";

const appRoutes: Routes = [
	{ path: 'menu', component: MenuComponent },
	{ path: 'about', component: AboutComponent },
	{ path: 'contact', component: ContactComponent },
	{ path: 'home', component: HomeComponent },
	{ path: '', redirectTo: "home", pathMatch: "full" }
]

@NgModule({
	imports: [
		RouterModule.forRoot(
			appRoutes
		)
	],
	exports: [
		RouterModule
	]
})
export class AppRoutingModule {}