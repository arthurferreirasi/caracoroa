import { Match } from "../interfaces/matches-structure";

export class TeamDrawService{

    private matches: Array<Match> = [];

    public shuffleArray(teams: string[]): string[] {
        for (let i = teams.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [teams[i], teams[j]] = [teams[j], teams[i]];
        }
        return teams;
      }
      
      public drawTeamsForTournament(teams: string[]): Array<Match> {
        // Make a copy of the teams array to avoid modifying the original array
        const shuffledTeams = this.shuffleArray(teams.slice());
      
        if (shuffledTeams.length % 2 !== 0) {
          shuffledTeams.push("BYE"); // "BYE" indicates that the team will have a bye (free) round
        }
      
        for (let i = 0; i < shuffledTeams.length / 2; i += 2){
            this.matches[i] = shuffledTeams[i];
            this.matches[i+1] = shuffledTeams[i+1];
        }
        return this.matches;
      }
}