import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TeamDrawService } from '../services/team-draw.service';
import { Match } from '../interfaces/matches-structure';
import { delay } from 'rxjs';

@Component({
  selector: 'app-quickstart',
  templateUrl: './quickstart.component.html',
  styleUrls: ['./quickstart.component.scss']
})
export class QuickstartComponent implements OnInit{

  private teamDrawService: TeamDrawService;

  constructor(teamDrawService: TeamDrawService){
    this.teamDrawService = teamDrawService;
  }

  players: string = '';
  listPlayers!: string[];
  isInvalidPlayers!: boolean;
  teamsMatches: Array<Match> = [];
  isReady: boolean = false;
  displayedColumns: string[] = ['Time de casa', 'vs', 'Time visitante'];
  dataSource!: any[];
  isLoading: boolean = false;

  ngOnInit(): void {
    this.isInvalidPlayers = true;
    this.dataSource = [];
  }

  canRun(): boolean {
    this.isInvalidPlayers = (typeof this.players.trim()=='undefined' || this.players.trim() == null || this.players.trim() == '');
    return this.isInvalidPlayers;
  }

  addPlayer() {
    if(this.canRun())
      return;
    this.isLoading = true;
    console.log("LOADING");
    delay(10000);
    this.isLoading = false;
    this.listPlayers = this.formatListPlayers(this.players);
    this.players = '';
    this.teamsMatches = this.teamDrawService.drawTeamsForTournament(this.listPlayers);
    this.dataSource = this.buildDataSource(this.teamsMatches);
    this.isReady = true;
  }

  private buildDataSource(teamsMatches: Array<Match>): any[]{
    return teamsMatches.map(x => ({
      'Time de casa': x.homeTeam,
      'Time visitante': x.visitingTeam
    }));
  }

  private formatListPlayers(players: string): string[]{
    var listPlayers = players.split('\n');
    listPlayers = listPlayers.filter(item => item.trim() !== "");
    listPlayers = listPlayers.map(x => x.replace(/[^a-zA-Z\sáÁàÀâÂãÃéÉêÊíÍóÓôÔõÕúÚüÜ]/g, ''));
    return listPlayers;
  }
}
