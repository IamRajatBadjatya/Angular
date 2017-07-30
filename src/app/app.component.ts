import { UsersService } from './services/users/users.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private usersService: UsersService) {}

  title = 'app works!';
  longerTitle = 'This is a very long title';

  ngOnInit() {
    this.usersService.getUsers().subscribe(
      users => {
        console.log('This is the users\' data: ', users);
      }
    )
  }
}
