import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './components/main-comp/main-page/main-page.component';
import { PrivacyPolicyComponent } from './components/main-comp/privacy-policy/privacy-policy.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { MainCompComponent } from './components/main-comp/main-comp.component';
import { CarouselContentComponent } from './components/carousel-content/carousel-content.component';
import { GamesComponent } from './components/games/games.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    PrivacyPolicyComponent,
    NavBarComponent,
    FooterComponent,
    MainCompComponent,
    CarouselContentComponent,
    GamesComponent,
    AboutUsComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
