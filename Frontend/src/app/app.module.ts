import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MyappComponent } from './myapp/myapp.component';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './My_Components/navbar/navbar.component';
import { SliderComponent } from './My_Components/slider/slider.component';
import { CategoriesComponent } from './My_Components/categories/categories.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { PlayerProfileComponent } from './My_Components/player-profile/player-profile.component';
import { FooterComponent } from './My_Components/footer/footer.component';
import { SecondComponent } from './My_Components/second/second.component';
import { BlogComponentComponent } from './My_Components/Navbar_Components/blog-component/blog-component.component';
import { HomeComponentsComponent } from './My_Components/Navbar_Components/home-components/home-components.component';
import { PageComponentComponent } from './My_Components/Navbar_Components/page-component/page-component.component';
import { NavSliderComponent } from './My_Components/Navbar_Components/nav-slider/nav-slider.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SliderComponent,
    CategoriesComponent,
  VideoPlayerComponent,
  MyappComponent,
  PlayerProfileComponent,
  FooterComponent,
  SecondComponent,
  BlogComponentComponent,
  HomeComponentsComponent,
  PageComponentComponent,
  NavSliderComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
