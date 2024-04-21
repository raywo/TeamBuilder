import {Component, inject} from '@angular/core';
import {TeamsService} from "../../services/teams.service";
import {AsyncPipe} from "@angular/common";
import {TeamViewComponent} from "../team-view/team-view.component";


@Component({
  selector: 'app-teams-list',
  standalone: true,
  imports: [
    AsyncPipe,
    TeamViewComponent,
  ],
  templateUrl: './teams-list.component.html'
})
export class TeamsListComponent {

  private teamsService = inject(TeamsService);
  protected teams$ = this.teamsService.teams$;

}
