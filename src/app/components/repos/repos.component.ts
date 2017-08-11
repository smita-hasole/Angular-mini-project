import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "app/services/users.service";
import { Observable } from "rxjs/Observable";
import { User } from "app/components/users-view/user";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],

})
export class ReposComponent implements OnInit {
  userId: string;
  repoDetails: Observable<any>;
  repoTitle;
  isDataLoaded = true;
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
  }
  ngOnInit() {
    this.getRepos();
  }

  getRepos() {
    let username = this.activatedRoute.snapshot.params['name'];
    this.userId = username;
    console.log("*****************************" + this.userId);
    this.usersService.getRepos("/" + this.userId + "/" + "repos").subscribe((data) => { this.repoDetails = data; console.log(data);  this.isDataLoaded = false;});
    console.log("*****************************" + this.repoDetails);
    this.repoTitle = this.usersService.getUserName();
  }

}
