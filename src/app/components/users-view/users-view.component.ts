import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/services/users.service";
import { User } from "app/components/users-view/user";
import { Params } from "@angular/router";


@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css'],
}
)
export class UsersViewComponent implements OnInit {

  isDataLoaded = true;
  users: User[];
  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.isDataLoaded = true;
    this.usersService.getUsers().subscribe((data) => {
    this.users = data; this.isDataLoaded = false;
      console.log(data)
    });
  }
}
