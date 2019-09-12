import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
// import { MainComponent } from './main/main.component';
// import { IntroComponent } from './intro/intro.component';
// import { AstrologyComponent } from './astrology/astrology.component';
// import { TarotComponent } from './tarot/tarot.component';
// import { AboutComponent } from './about/about.component';
// import { ContactComponent } from './contact/contact.component';
// import { CounselingComponent } from './counseling/counseling.component';

@NgModule({
  declarations: [
    AppComponent,
    // MainComponent,
    // IntroComponent,
    // AstrologyComponent,
    // TarotComponent,
    // AboutComponent,
    // ContactComponent,
    // CounselingComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
