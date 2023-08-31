import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuickstartComponent } from './quickstart/quickstart.component';
import { TournamentsComponent } from './tournaments/tournaments.component';

const routes: Routes = [
  {path: '', redirectTo: 'quickstart', pathMatch: 'full'},
  {path: 'quickstart', component: QuickstartComponent},
  {path: 'tournaments', component: TournamentsComponent},
  {path: 'preferences', component: TournamentsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
