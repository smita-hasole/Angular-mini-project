import { Component, OnInit } from '@angular/core';
import { User } from "app/components/users-view/user";
import { UsersService } from "app/users.service";
import { Params, ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {
 

  userId: string;

  userDetails:any={};
  constructor(private activatedRoute: ActivatedRoute,private router:Router, private usersService: UsersService) {
  }


  ngOnInit() {
  let name1=this.activatedRoute.snapshot.params['name'];
  this.userId = name1;
  console.log("*****************************"+this.userId);
    this.usersService.getUsersdata("/"+this.userId).subscribe((data) => {this.userDetails = data});
  }
  show(){
        this.router.navigate([this.userId+'/repos']);
  }
}
