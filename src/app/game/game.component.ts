import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss'],
})
export class GameComponent implements OnInit {
	money: number = 0;
	printers: number = 0;
	factory: number = 0;
	persecond: number = 0;

	constructor() {}

	ngOnInit(): void {
		var myVar = setInterval(() => {
			this.gameLoop();
		}, 100);
	}

	onClick() {
		this.money++;
	}

	buyPrinter() {
		if (this.money >= 10) {
			this.money -= 10;
			this.printers += 1;
		} else {
		}
	}

	buyFactory() {
		if (this.money >= 20) {
			this.money -= 20;
			this.factory += 1;
		} else {
		}
	}

	gameLoop(): void {
		this.persecond = 0;
		this.persecond += 1 * this.printers;
		this.printers += 1 * this.factory;

		this.money += this.persecond / 10;
	}
}
