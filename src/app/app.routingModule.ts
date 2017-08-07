import { AppComponent } from "app/app.component";
import { AboutUsComponent } from "app/components/about-us/about-us.component";
import { UsersViewComponent } from "app/components/users-view/users-view.component";
import {UserDetailsComponent} from "app/components/user-details/user-details.component";
import { Routes, RouterModule } from "@angular/router";
import { ReposComponent } from "app/components/repos/repos.component";
import { NgModule } from "@angular/core";


export const appRoutingModule: Routes = [
   { path: 'home', component:UsersViewComponent }, 
   { path: 'about', component: AboutUsComponent }, 
   { path: '', component: UsersViewComponent } ,
   {path:'User/:name',component:UserDetailsComponent},
   {path:':name/repos', component:ReposComponent}
]; 


 @NgModule({
   imports: [RouterModule.forRoot(appRoutingModule)],
   exports: [RouterModule],
 })
 export class AppRoutingModule { }
 