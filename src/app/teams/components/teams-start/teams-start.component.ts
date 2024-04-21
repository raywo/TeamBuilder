import {Component, inject} from '@angular/core';
import {TeamsFormComponent} from "../teams-form/teams-form.component";
import {TeamsService} from "../../services/teams.service";
import {TeamBuildRequest} from "../../models/team-build-request.model";
import {TeamsListComponent} from "../teams-list/teams-list.component";


@Component({
  selector: 'app-teams-start',
  standalone: true,
  imports: [
    TeamsFormComponent,
    TeamsListComponent,
  ],
  templateUrl: './teams-start.component.html'
})
export class TeamsStartComponent {

  private teamService = inject(TeamsService);


  onBuildTeam(request: TeamBuildRequest) {
    this.teamService.buildTeams(request);
  }

}
