import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {createTeam, Team} from "../models/team.model";
import {TeamBuildRequest} from "../models/team-build-request.model";
import {PersonService} from "../../persons/services/person.service";
import {Person} from "../../persons/models/person.model";
import {createMember, Member} from "../models/member.model";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private persons: Person[] = [];
  private teamsSubject: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  public readonly teams$: Observable<Team[]> = this.teamsSubject.asObservable();


  constructor(personService: PersonService) {
    personService.persons$.subscribe(persons => this.persons = persons);
  }


  private get teams(): Team[] {
    return this.teamsSubject.getValue();
  }

  private set teams(teams: Team[]) {
    this.teamsSubject.next(teams)
  }

  public buildTeams(request: TeamBuildRequest) {
    const teams: Team[] = [];
    const membersPerTeam = Math.ceil(this.persons.length / request.count);
    let availablePersons = [...this.persons];

    for (let i = 0; i < request.count; i++) {
      const members: Member[] = [];

      for (let j = 0; j < membersPerTeam; j++) {
        const {person, newAvailablePersons} = this.takePersonFrom(availablePersons)
        availablePersons = newAvailablePersons;

        members.push(createMember(TeamsService.isDriver(j, request.markDriver), person));
      }

      teams.push(createTeam(i + 1, members));
    }

    this.teams = teams;
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
