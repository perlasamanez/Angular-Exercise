import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './modules/App/app.component';
import { LandingComponent } from './modules/App/Landing/landing.component';
import { LandingHowItWorksComponent } from './modules/App/Landing/LandingHowItWorks/landing-how-it-works.component';
import { LandingIntroComponent } from './modules/App/Landing/LandingIntro/landing-intro.component';
import { LandingNavigationComponent } from './modules/App/Landing/LandingNavigation/landing-navigation.component';

import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LandingHowItWorksComponent,
    LandingIntroComponent,
    LandingNavigationComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
