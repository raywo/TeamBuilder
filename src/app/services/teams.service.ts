import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {Team} from "../models/team.model";

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  private teamsSubject: BehaviorSubject<Team[]> = new BehaviorSubject<Team[]>([]);
  public readonly team$: Observable<Team[]> = this.teamsSubject.asObservable();

  private get teams(): Team[] {
    return this.teamsSubject.getValue();
  }

  private set teams(teams: Team[]) {
    this.teamsSubject.next(teams)
  }

}
