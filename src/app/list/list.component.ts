import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';

@Component({
	selector: 'app-list',
	templateUrl: './list.component.html',
	styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
	list: Object;

	constructor(private _http: HttpService) {}

	ngOnInit(): void {
		this._http.getList().subscribe((data) => {
			this.list = data;
			console.log(this.list);
		});
	}
}
