import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './modules/App/app.component';
import { LandingNavigationComponent } from './modules/App/Landing/LandingNavigation/landing-navigation.component';
import { LandingIntroComponent } from './modules/App/Landing/LandingIntro/landing-intro.component';
import { LandingHowItWorksComponent } from './modules/App/Landing/LandingHowItWorks/landing-how-it-works.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingNavigationComponent,
    LandingIntroComponent,
    LandingHowItWorksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
