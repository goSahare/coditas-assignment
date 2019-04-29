import { Component, OnInit,Input } from '@angular/core';
import { UsersService } from '../services/users.service' ;
import { debounceTime, distinctUntilChanged } from 'rxjs/operators'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	userData : any[] = [];

	sortByCategory = ['Name (A-Z)','Name (Z-A)', 'Rank Up', 'Rank Down'];
	sortMethod  = this.sortByCategory[0];

	constructor(private us : UsersService) { }

	ngOnInit() {
	}

	searchUser(str){
		if (str)
		  	this.us.searchUser(str).subscribe(resp => {
		  		this.userData = resp.items;
		  	});
	}

}
