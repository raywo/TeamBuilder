import {Component, inject, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {TeamViewComponent} from "./teams/components/team-view/team-view.component";
import {PersonViewComponent} from "./persons/components/persons/person-view/person-view.component";
import {PersonListComponent} from "./persons/components/persons/person-list/person-list.component";
import {PersonFormComponent} from "./persons/components/persons/person-form/person-form.component";
import {TeamsStartComponent} from "./teams/components/teams-start/teams-start.component";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faHeart, faLanguage, faPeopleGroup} from "@fortawesome/free-solid-svg-icons";
import {StateManagementService} from "./state-management/services/state-management.service";
import {NgbDropdown, NgbDropdownButtonItem, NgbDropdownItem, NgbDropdownMenu, NgbDropdownToggle} from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TeamViewComponent, PersonViewComponent, PersonListComponent, PersonFormComponent, TeamsStartComponent, FaIconComponent, NgbDropdown, NgbDropdownToggle, NgbDropdownMenu, NgbDropdownButtonItem, NgbDropdownItem],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {

  private stateManagement = inject(StateManagementService);

  protected collapsed = true;
  protected group = faPeopleGroup;
  protected heart = faHeart;
  protected language = faLanguage;


  ngOnInit(): void {
    this.stateManagement.restoreState();
  }

}
