import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { share } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  baseUrl = 'https://api.github.com'
  constructor(private http: HttpClient) { }

  searchUser(searchString) : Observable<any>{
  	return this.http.get( this.baseUrl+ '/search/users?q=' + searchString).pipe(share());;
  }

  fetchRepo(user) : Observable<any>{
  	return this.http.get( this.baseUrl + '/users/' + user +'/repos');
  }
}
