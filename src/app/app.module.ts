import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { FlexLayoutModule } from "@angular/flex-layout";
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';
import { ProgressbarComponent } from './shared/progressbar/progressbar.component';

import { MainComponent } from './main/main.component';
import { IntroComponent } from './intro/intro.component';
import { TarotComponent } from './tarot/tarot.component';
import { CounselingComponent } from './counseling/counseling.component';
import { AstrologyComponent } from './astrology/astrology.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavListComponent,
    ProgressbarComponent,

    MainComponent,
    IntroComponent,
    TarotComponent,
    CounselingComponent,
    AstrologyComponent,
    ContactComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
