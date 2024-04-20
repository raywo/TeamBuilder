import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TeamViewComponent} from "./treams/components/team-view/team-view.component";
import {PersonViewComponent} from "./persons/components/persons/person-view/person-view.component";
import {createPerson} from "./persons/models/person.model";
import {PersonListComponent} from "./persons/components/persons/person-list/person-list.component";
import {PersonFormComponent} from "./persons/components/persons/person-form/person-form.component";
import {TeamsStartComponent} from "./treams/components/teams-start/teams-start.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamViewComponent, PersonViewComponent, PersonListComponent, PersonFormComponent, TeamsStartComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly createPerson = createPerson;
}
