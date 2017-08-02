import { Component, OnInit } from '@angular/core';
import { UsersService } from "app/users.service";
import { User } from "app/components/users-view/user";
import { Params } from "@angular/router";


@Component({
  selector: 'app-users-view',
  templateUrl: './users-view.component.html',
  styleUrls: ['./users-view.component.css'],
}
)
export class UsersViewComponent implements OnInit {

  users: User[];
  constructor(private usersService: UsersService) {
  }

  ngOnInit() {
    this.usersService.getUsers().subscribe((data)=>{this.users=data;
    console.log(data)});
    console.log("$$$$$$$$$$$$$$$$$$$$$ "+this.users);
  }

}
