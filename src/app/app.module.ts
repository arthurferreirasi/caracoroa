import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShuffleTeamsComponent } from './shuffle-teams/shuffle-teams.component';
import { HomeComponent } from './home/home.component';
import { SideNavigationComponent } from './side-navigation/side-navigation.component';
import { MatListModule } from '@angular/material/list'; 

@NgModule({
  declarations: [
    AppComponent,
    ShuffleTeamsComponent,
    HomeComponent,
    SideNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
