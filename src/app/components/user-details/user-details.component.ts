import { Component, OnInit } from '@angular/core';
import { User } from "app/components/users-view/user";
import { UsersService } from "app/services/users.service";
import { Params, ActivatedRoute } from "@angular/router";
import { Router } from '@angular/router';
import { SpinnerService } from "app/services/spinner.service";
@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css'],
})
export class UserDetailsComponent implements OnInit {

  isDataLoaded: boolean;
  userNameForRepo;
  userId: string;
  companyName: string;
  userDetails: any = {};
  constructor(private spinnerService: SpinnerService, private activatedRoute: ActivatedRoute, private router: Router, private usersService: UsersService) {
   // this.objLoaderStatus = false;
   
  }


  ngOnInit() {
    this.getUserData();
  }
  show(userName) {
    this.usersService.setUserName(userName);
    this.router.navigate([this.userId + '/repos']);
  }
  getDetail(userInfo) {
      console.log("!!!!!!!!!!!!!!!!!!!!!!!!!!" + userInfo);
    if (userInfo != null) {
      return userInfo;
    }
    return "NA";
  }

  DataLoaded(userInfo) {
    if (userInfo != null) {
      return false;
    }
   return true;
  }

  getUserData() {
    
    let Username = this.activatedRoute.snapshot.params['name'];
    this.userId = Username;
    console.log("*****************************" + this.userId);
    this.usersService.getUsersData("/" + this.userId).subscribe((data) => { this.userDetails = data },this.isDataLoaded = false);
    console.log("&&&&&&&&&&&&&&&&&&&&&&&&&&" + this.userDetails.name);
    this.userNameForRepo = this.userDetails.name;
  }
}