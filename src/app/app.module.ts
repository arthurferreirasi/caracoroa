import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './sidenav/sidenav.component';
import { BodyComponent } from './body/body.component';
import { QuickstartComponent } from './quickstart/quickstart.component';
import { TournamentsComponent } from './tournaments/tournaments.component';
import { MatIconModule } from '@angular/material/icon';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { TeamDrawService } from './services/team-draw.service';


@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    BodyComponent,
    QuickstartComponent,
    TournamentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatGridListModule,
    MatInputModule,
    FormsModule,
    MatButtonModule
  ],
  providers: [
    TeamDrawService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
