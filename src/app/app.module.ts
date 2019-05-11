import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

// Imports for Angular Material
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { SliderModule } from 'angular-image-slider';
import { NgImageSliderModule } from 'ng-image-slider';

//This is the normal component imports
import { WelcomeComponent } from './components/welcome/welcome.component';
import { LoginComponent } from './components/login/login.component';
import { TopnavbarComponent } from './components/topnavbar/topnavbar.component';
import { MovieSlideshowComponent } from './components/movie-slideshow/movie-slideshow.component';
import { SignupComponent } from './components/signup/signup.component';
import { FormsModule } from '@angular/forms';
import { SearchMovieComponent } from './components/search-movie/search-movie.component';
import { MovieComponent } from './components/movie/movie.component';
import { UserhomeComponent } from './components/user/userhome/userhome.component'

//Services
import { SearchMovieService } from './services/search-movie.service';
import { LoginService } from './services/login.service';
import { FooterbarComponent } from './components/footerbar/footerbar.component';
import { AlertMessageComponent } from './components/utils/alert-message/alert-message.component';
import { AlertMessageService } from './services/alert-message.service';
import { SignupService } from './services/signup.service';
import { AdminhomeComponent } from './components/admin/adminhome/adminhome.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    TopnavbarComponent,
    MovieSlideshowComponent,
    SignupComponent,
    SearchMovieComponent,
    MovieComponent,
    UserhomeComponent,
    FooterbarComponent,
    AlertMessageComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule, //This is for controlling form to make it work in Angular 
    SliderModule,
    BrowserAnimationsModule,
    NgImageSliderModule,

  ],
  providers: [
    SearchMovieService,
    LoginService,
    SignupService,
    AlertMessageService //add the service here! @Viet
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
