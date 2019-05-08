import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

// Imports for Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
//import {FlexLayoutModule} from '@angular/flex-layout'; //<--This path currently throw an ERROR

//This is the normal component imports
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { MovieSlideshowComponent } from './components/movie-slideshow/movie-slideshow.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';

//Services @Viet
import { SearchMovieService } from './services/search-movie.service';
import { MovieComponent } from './components/movie/movie.component'

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    TopnavbarComponent,
    MovieSlideshowComponent,
    SignupComponent,
    SearchMovieComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule //This is for controlling form to make it work in Angular 
    //FlexLayoutModule
  ],
  providers: [
    SearchMovieService //add the service here! @Viet
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
