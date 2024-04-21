import {Component, input} from '@angular/core';
import {Team} from "../../models/team.model";
import {MemberViewComponent} from "../member-view/member-view.component";


@Component({
  selector: 'app-team-view',
  standalone: true,
  imports: [
    MemberViewComponent
  ],
  templateUrl: './team-view.component.html'
})
export class TeamViewComponent {

  public team = input.required<Team>();

}
