import { Component, OnInit,Input } from '@angular/core';
import { UsersService } from '../services/users.service' ;

@Component({
  selector: 'user-detials',
  templateUrl: './user-detials.component.html',
  styleUrls: ['./user-detials.component.scss']
})
export class UserDetialsComponent implements OnInit {
  @Input() sortedUsers : any[] = [];
  @Input() sortMethodType = [];

  userRepo : any;

  constructor(private us : UsersService) { }

  ngOnInit() {
  }

  showRepos(user){
  	this.us.fetchRepo(user).subscribe( resp => this.userRepo = resp);
  }

}
