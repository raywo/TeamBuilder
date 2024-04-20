import {Component, EventEmitter, inject, Output} from '@angular/core';
import {AsyncPipe} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PersonService} from "../../../persons/services/person.service";
import {TeamBuildRequest} from "../../models/team-build-request.model";

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
export class TeamsFormComponent {

  @Output() build = new EventEmitter<TeamBuildRequest>();

  private personService: PersonService = inject(PersonService);

  protected persons$ = this.personService.persons$;
  protected teamCount: number = 1;
  protected markDriver: boolean = true;

  buildTeams() {
    this.build.emit({
      count: this.teamCount,
      markDriver: this.markDriver
    });
  }

}
