import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from "rxjs/Observable";

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import { User } from "app/components/users-view/user";
import { constantDefined } from "app/constantDefined";


@Injectable()
export class UsersService {

  constructor(private _http: Http) { }
  userName: string;

  getUsers(): Observable<User[]> {
    return this._http.get(constantDefined.USER_DATA_URL)
      .map((response: Response) => <User[]>response.json())

  }

  getUsersData(user: string): any {
    return this._http.get(constantDefined.USER_DATA_URL + user)
      .map((response: Response) => response.json());

  }
  getRepos(reposUrl: string): Observable<any> {
    return this._http.get(constantDefined.USER_DATA_URL + reposUrl)
      .map((response: Response) => response.json())
    //  .do(data => console.log(JSON.stringify(data)));
  }


  setUserName(userName) {
    this.userName = userName;
  }

  getUserName() {
    return this.userName;
  }
}