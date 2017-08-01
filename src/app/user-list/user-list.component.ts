import { Component, OnInit } from '@angular/core';

import { UsersService } from '../services/users/users.service';

import { User } from '../models/user.model';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  users: User[];
  loading: boolean = true;
  ngOnInit() {
    this.usersService.getUsers().subscribe(
      users => {
        this.users = users;
        this.loading = false;
      }
    )
  }

}
