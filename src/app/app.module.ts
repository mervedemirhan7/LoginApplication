import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from './authguard';
import {AuthenticationService} from './authentication.service';
import { UserComponent } from './user/user.component';
import { Http, RequestOptions, HttpModule } from '@angular/http';
import { NotfoundComponent } from './notfound/notfound.component';
import { MenuComponent } from './menu/menu.component';

const appRoutes:Routes = [
  
  {
    path:'',
    component: LoginFormComponent
  },
  {
    path:'login',
    component: LoginFormComponent
  },
  {
    path:'users',
    component: UserComponent
  },
  {
    path:'dashboard',
    canActivate:[AuthGuard],
    component: DashboardComponent
  },
  {
  path:'**',
  component: NotfoundComponent
  }
]


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    DashboardComponent,
    UserComponent,
    NotfoundComponent,
    MenuComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [AuthenticationService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
