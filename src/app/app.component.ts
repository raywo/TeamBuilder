import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TeamViewComponent} from "./components/team-view/team-view.component";
import {PersonViewComponent} from "./components/persons/person-view/person-view.component";
import {createPerson} from "./models/person.model";
import {PersonListComponent} from "./components/persons/person-list/person-list.component";
import {PersonFormComponent} from "./components/persons/person-form/person-form.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamViewComponent, PersonViewComponent, PersonListComponent, PersonFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  protected readonly createPerson = createPerson;
}
