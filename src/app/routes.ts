import { AppComponent } from "app/app.component";
import { AboutUsComponent } from "app/components/about-us/about-us.component";
import { UsersViewComponent } from "app/components/users-view/users-view.component";
import {UserDetailsComponent} from "app/components/user-details/user-details.component";
import { Routes } from "@angular/router";
import { ReposComponent } from "app/components/repos/repos.component";


export const routes: Routes = [
    {
        path: '',
        component: AppComponent,
        children: [
            {
                path: '',
                component: UsersViewComponent
            },
            {
                path: 'home',
                component: UsersViewComponent,

            },
            {
                path: 'about us',
                component: AboutUsComponent
            },
            {
                path: ':name',
                component: UserDetailsComponent
            },
            {
                path: ':name/repos',
                component: ReposComponent
            }

        ]
    }
]
