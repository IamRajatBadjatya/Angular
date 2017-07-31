import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) {}

  title = 'app works!';
  longerTitle = 'This is a very long title';

  ngOnInit() {
    
  }

  navigateToUserList() {
    this.router.navigate(['/user-list']);
  }

}
