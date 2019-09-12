import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';

import { NavigationComponent } from './shared/navigation/navigation.component';
import { SidenavListComponent } from './shared/sidenav-list/sidenav-list.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    SidenavListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,   
    FormsModule,
    AppRoutingModule,
    MaterialModule,
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
