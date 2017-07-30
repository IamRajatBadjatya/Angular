import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private http: Http) { }

  getUsers() {
    return this.http.get('https://jsonplaceholder.typicode.com/users')
      .map((response: Response) => response.json());
  }

}