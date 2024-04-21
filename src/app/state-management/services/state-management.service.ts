import {Injectable} from '@angular/core';
import {Team} from "../../teams/models/team.model";
import {Person} from "../../persons/models/person.model";
import {TeamsService} from "../../teams/services/teams.service";
import {PersonService} from "../../persons/services/person.service";
import {TeamBuildRequest} from "../../teams/models/team-build-request.model";


enum StorageKeys {
  PERSONS_KEY = "persons",
  TEAMS_KEY = "teams",
  REQUEST_KEY = "request"
}


@Injectable({
  providedIn: 'root'
})
export class StateManagementService {


  constructor(private teamsService: TeamsService,
              private personService: PersonService) {
  }


  public restoreState(): void {
    this.personService.restoreState(this.readPersons());
    this.teamsService.restoreState(this.readTeams(), this.readRequest());

    this.teamsService.teams$.subscribe(teams => {
      this.storeTeams(teams);
    });

    this.teamsService.request$.subscribe(request => {
      this.storeRequest(request);
    })

    this.personService.persons$.subscribe(persons => {
      this.storePersons(persons);
    });
  }


  private storePersons(persons: Person[]): void {
    localStorage.setItem(StorageKeys.PERSONS_KEY, JSON.stringify(persons));
  }


  private readPersons(): Person[] {
    const persons = localStorage.getItem(StorageKeys.PERSONS_KEY);

    if (!persons) return [];

    return JSON.parse(persons);
  }


  private storeTeams(teams: Team[]) {
    localStorage.setItem(StorageKeys.TEAMS_KEY, JSON.stringify(teams));
  }


  private readTeams(): Team[] {
    const teams = localStorage.getItem(StorageKeys.TEAMS_KEY);

    if (!teams) return [];

    return JSON.parse(teams);
  }


  private storeRequest(request: TeamBuildRequest): void {
    localStorage.setItem(StorageKeys.REQUEST_KEY, JSON.stringify(request));
  }


  private readRequest(): TeamBuildRequest {
    const request = localStorage.getItem(StorageKeys.REQUEST_KEY);

    if (!request) {
      return {
        count: 1,
        markDriver: true
      };
    }

    return JSON.parse(request);
  }
}
