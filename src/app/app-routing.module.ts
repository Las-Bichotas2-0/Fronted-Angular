import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { MainComponent } from './main/main.component';
import { ProfileComponent } from './profile/profile.component';
import {RegisterRoleComponent} from './register-role/register-role.component';
import {StudentRegisterComponent} from './student-register/student-register.component';
import {TuthorRegisterComponent} from './tuthor-register/tuthor-register.component';
import {SubscriptionsComponent} from './subscriptions/subscriptions.component';
import {SessionComponent} from './session/session.component';
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'register',
    component: RegisterComponent,
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'role'
      },
      {
        path: 'role',
        component: RegisterRoleComponent
      },
      {
        path: 'student',
        component: StudentRegisterComponent
      },
      {
        path: 'tutor',
        component: TuthorRegisterComponent
      },
      {
        path: 'subscription',
        component : SubscriptionsComponent
      }
    ],
  },
  { path: 'main',
    children: [
      {
        path: '',
        pathMatch: 'prefix',
        redirectTo: 'session'
      },
      {
        path: 'session',
        component: SessionComponent 
      },
      {
        path: 'profile',
        component: ProfileComponent
      }
    ]
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
