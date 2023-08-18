import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { TeamDrawService } from '../services/team-draw.service';
import { Match } from '../interfaces/matches-structure';

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

  ngOnInit(): void {
    this.isInvalidPlayers = true;
  }

  canRun(): boolean {
    this.isInvalidPlayers = (typeof this.players.trim()=='undefined' || this.players.trim() == null || this.players.trim() == '');
    return this.isInvalidPlayers;
  }

  addPlayer() {
    if(this.canRun())
      return;
    this.listPlayers = this.formatListPlayers(this.players);
    this.players = '';
    console.log(this.listPlayers);
    this.teamsMatches = this.teamDrawService.drawTeamsForTournament(this.listPlayers);
    console.log(this.teamsMatches);
  }

  private formatListPlayers(players: string): string[]{
    var listPlayers = players.split('\n');
    listPlayers = listPlayers.map(x => x.replace(/[^a-zA-Z\s]/g, '')
    );
    return listPlayers;
  }
}
