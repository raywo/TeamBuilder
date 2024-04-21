import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {createTeam, Team} from "../models/team.model";
import {TeamBuildRequest} from "../models/team-build-request.model";
import {PersonService} from "../../persons/services/person.service";
import {Person} from "../../persons/models/person.model";
import {createMember} from "../models/member.model";


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private persons: Person[] = [];
  private teamsSubject: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  private requestSubject: BehaviorSubject<TeamBuildRequest> = new BehaviorSubject<TeamBuildRequest>({
    count: 1,
    markDriver: true
  });

  public readonly teams$: Observable<Team[]> = this.teamsSubject.asObservable();
  public readonly request$: Observable<TeamBuildRequest> = this.requestSubject.asObservable();


  constructor(personService: PersonService) {
    personService.persons$.subscribe(persons => this.persons = persons);
  }


  public restoreState(teams: Team[], teamBuildRequest: TeamBuildRequest): void {
    this.requestSubject.next(teamBuildRequest);
    this.teams = teams;
  }


  public getTeams(): Team[] {
    return this.teams;
  }


  public buildTeams(request: TeamBuildRequest) {
    const teams: Team[] = [];
    let availablePersons = [...this.persons];

    for (let i = 0; i < request.count; i++) {
      teams.push(createTeam(i + 1, []));
    }

    let loopCount = 0;
    while (availablePersons.length > 0) {
      for (let i = 0; i < request.count; i++) {
        if (availablePersons.length === 0) break;

        const {person, newAvailablePersons} = this.takePersonFrom(availablePersons);
        availablePersons = newAvailablePersons;

        teams[i].members.push(createMember(TeamsService.isDriver(loopCount, request.markDriver), person));
      }

      loopCount += 1;
    }

    this.teams = teams;
    this.requestSubject.next(request);
  }


  private get teams(): Team[] {
    return this.teamsSubject.getValue();
  }


  private set teams(teams: Team[]) {
    this.teamsSubject.next(teams)
  }


  private static isDriver(j: number, markDriver: boolean): boolean {
    return j === 0 && markDriver;
  }


  private takePersonFrom(availablePersons: Person[]): { person: Person, newAvailablePersons: Person[] } {
    const index = this.getRandomInt(0, availablePersons.length - 1);
    const person = availablePersons[index];

    return {person, newAvailablePersons: availablePersons.filter(p => p.id !== person.id)};
  }


  private getRandomInt(min: number, max: number) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
