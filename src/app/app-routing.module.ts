import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieComponent } from './components/movie/movie.component';
import { UserhomeComponent } from './components/user/userhome/userhome.component';
import { LoginService } from './services/login.service';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';

const routes: Routes = [
  {path: 'user-home', component: UserhomeComponent, canActivate: [LoginService]},
  {path: 'admin-home', component: AdminhomeComponent, canActivate: [LoginService]},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'search-movie', component: SearchMovieComponent},
  {path: 'movie/:movieID', component: MovieComponent},

  //This path for return to main page if can't find any path @Viet
  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
