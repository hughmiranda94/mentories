import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { PopMenuComponent } from './components/pop-menu/pop-menu.component';
import { SpecMenuComponent } from './components/spec-menu/spec-menu.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { FoodInfoComponent } from './components/food-info/food-info.component';
import { MainContentComponent } from './components/landing-page/main-content/main-content.component';
import { SideContentComponent } from './components/landing-page/side-content/side-content.component';
import { SocialNavComponent } from './components/landing-page/social-nav/social-nav.component';
import { PopCardComponent } from './components/pop-menu/pop-card/pop-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { NewsletterComponent } from './components/newsletter/newsletter.component';
import { HeaderComponent } from './components/landing-page/main-content/header/header.component';
import { ReversePipe } from '../app/components/pop-menu/pop-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    PopMenuComponent,
    SpecMenuComponent,
    ContactPageComponent,
    FoodInfoComponent,
    MainContentComponent,
    SideContentComponent,
    SocialNavComponent,
    PopCardComponent,
    FooterComponent,
    NewsletterComponent,
    ReversePipe,
    HeaderComponent    
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
