import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { User } from '../../models/user.model'; 

import 'rxjs/add/operator/map';
import { Observable } from 'rxjs';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUsers() : Observable<User[]> {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map((response: Response) => response.json() as User[] );
  }

}