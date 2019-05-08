import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
<<<<<<< HEAD
=======
import { MovieComponent } from './components/movie/movie.component';
>>>>>>> 3cf430c9e8d3e2d581b0fbfd1902a2ef0a60047b

const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'search-movie', component: SearchMovieComponent},
<<<<<<< HEAD
=======
  {path: 'movie/:movieID', component: MovieComponent},

  //This path for return to main page if can't find any path @Viet
>>>>>>> 3cf430c9e8d3e2d581b0fbfd1902a2ef0a60047b
  {path: '', component: WelcomeComponent},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
