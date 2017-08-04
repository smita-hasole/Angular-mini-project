import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { AboutUsComponent } from "./components/about-us/about-us.component";
import { RouterModule, Routes } from '@angular/router';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ReposComponent } from './components/repos/repos.component';  
import { UsersService } from "app/users.service";
import { routes } from "app/routes";



@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent,
    AboutUsComponent,
    UserDetailsComponent,
    ReposComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
