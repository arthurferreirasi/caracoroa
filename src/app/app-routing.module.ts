import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShuffleTeamsComponent } from './shuffle-teams/shuffle-teams.component';

const routes: Routes = [
  {path: '', redirectTo: 'quickstart', pathMatch: 'full'},
  {path: 'quickstart', component: ShuffleTeamsComponent},
  {path: 'tournaments', component: ShuffleTeamsComponent},
  {path: 'preferences', component: ShuffleTeamsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
