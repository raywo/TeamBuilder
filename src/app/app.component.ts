import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TeamViewComponent} from "./teams/components/team-view/team-view.component";
import {PersonViewComponent} from "./persons/components/persons/person-view/person-view.component";
import {PersonListComponent} from "./persons/components/persons/person-list/person-list.component";
import {PersonFormComponent} from "./persons/components/persons/person-form/person-form.component";
import {TeamsStartComponent} from "./teams/components/teams-start/teams-start.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faHeart, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamViewComponent, PersonViewComponent, PersonListComponent, PersonFormComponent, TeamsStartComponent, FaIconComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  protected group = faPeopleGroup;
  protected heart = faHeart;

}
