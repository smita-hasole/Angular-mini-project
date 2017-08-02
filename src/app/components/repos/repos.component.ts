import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { UsersService } from "app/users.service";
import { Observable } from "rxjs/Observable";
import { User } from "app/components/users-view/user";

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.css'],
 
})
export class ReposComponent implements OnInit {
  userId: string;
  repoDetails:Observable<any>;
  
  constructor(private activatedRoute: ActivatedRoute, private usersService: UsersService) {
  }
  ngOnInit() {
    let name1 = this.activatedRoute.snapshot.params['name'];
    this.userId = name1;
   console.log("*****************************" + this.userId);
    this.usersService.getRepos("/" + this.userId + "/" + "repos").subscribe((data) => { this.repoDetails = data ; console.log(data);});
  console.log("*****************************"+this.repoDetails);
  }

}
