import {Component, OnInit} from "@angular/core";
@Component({
	templateUrl: "./home.component.html",
	styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
	menu: { category: string, items: { name: string, price: number}[] }[] = [];
	
	ngOnInit():void {
		this.menu.push( { category: "antipasto", items: [{name: "bocconcini in pesto", price: 8}, { name: "bruschetta con crema", price: 11}, {name: "tortellini in brodo", price: 12}, { name: "risotto con pollo", price: 15}]});
		this.menu.push( { category: "insalata", items: [{ name: "caprese", price: 7 }, { name: "caesar", price: 9 }, { name: "house", price: 8 }]});
		this.menu.push( { category: "pizza", items: [{ name: "margherita", price: 11.5 }, { name: "sicilian", price: 13.5 }, { name: "quattro formaggi", price: 10 }]});
		this.menu.push( { category: "mains", items: [{ name: "new york striploin", price: 27.5 }, { name: "eggplant parmesan", price: 16.5 }, { name: "fettuccini alfredo", price: 15 }]});
	}
}