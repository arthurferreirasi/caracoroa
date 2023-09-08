import { Component } from '@angular/core';

@Component({
  selector: 'app-tournaments',
  templateUrl: './tournaments.component.html',
  styleUrls: ['./tournaments.component.scss']
})
export class TournamentsComponent {

  public isInvalidTeams: boolean = false;
  public teams!: string;
  public listTeams!: string[];
  isReady: boolean = false;
  dataSource!: any[];

  canRun(): boolean {
    this.isInvalidTeams = (typeof this.teams.trim()=='undefined' || this.teams.trim() == null || this.teams.trim() == '');
    return this.isInvalidTeams;
  }

  addTeams() {
    if(this.canRun())
      return;
    this.listTeams = this.formatListTeams(this.teams);
    this.teams = '';
    this.isReady = true;
  }

  private formatListTeams(players: string): string[]{
    var listPlayers = players.split('\n');
    listPlayers = listPlayers.filter(item => item.trim() !== "");
    listPlayers = listPlayers.map(x => x.replace(/[^a-zA-Z\sáÁàÀâÂãÃéÉêÊíÍóÓôÔõÕúÚüÜ]/g, ''));
    return listPlayers;
  }
}
