import {Component, EventEmitter, inject, OnDestroy, OnInit, Output} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PersonService} from "../../../persons/services/person.service";
import {TeamBuildRequest} from "../../models/team-build-request.model";
import {TeamsService} from "../../services/teams.service";
import {Subscription} from "rxjs";


@Component({
  selector: 'app-teams-form',
  standalone: true,
  imports: [
    AsyncPipe,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './teams-form.component.html'
})
export class TeamsFormComponent implements OnInit, OnDestroy {

  @Output() build = new EventEmitter<TeamBuildRequest>();

  private personService: PersonService = inject(PersonService);
  private teamService: TeamsService = inject(TeamsService);
  private subscription?: Subscription;

  protected persons$ = this.personService.persons$;
  protected teamCount: number = 1;
  protected markDriver: boolean = true;


  ngOnInit(): void {
    this.subscription = this.teamService.request$.subscribe(request => {
      this.teamCount = request.count;
      this.markDriver = request.markDriver;
    });
  }


  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }


  buildTeams() {
    this.build.emit({
      count: this.teamCount,
      markDriver: this.markDriver
    });
  }

}
