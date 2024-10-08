import { Match } from "../interfaces/matches-structure";

export class TeamDrawService {
  private singleMatch!: Match;
  private matchesList!: Array<Match>;

  public drawTeams(players: string[]): any {
    var teams = new Array<Array<string>>();
    const shuffledTeams = this.shuffleArray(players.slice());
    for (let j = 0; j < 5; j++){
      for (let i = 0; i < shuffledTeams.length; i++){
        teams[j].push(shuffledTeams[i]);
      }
    }

    return teams;
  }

  public shuffleArray(teams: string[]): string[] {
    for (let i = teams.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [teams[i], teams[j]] = [teams[j], teams[i]];
    }
    return teams;
  }

  public drawTeamsForTournament(teams: string[]): Array<Match> {
    this.matchesList = [];
    const shuffledTeams = this.shuffleArray(teams.slice());
    if (shuffledTeams.length % 2 !== 0) {
      shuffledTeams.push("BYE");
    }
    for (let i = 0; i < shuffledTeams.length; i += 2) {
      this.singleMatch = new Match(shuffledTeams[i], shuffledTeams[i+1]);
      this.matchesList.push(this.singleMatch);
    }
    
    return this.matchesList;
  }
}