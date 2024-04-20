import {Component, input} from '@angular/core';
import {Member} from "../../models/member.model";

@Component({
  selector: 'app-member-view',
  standalone: true,
  imports: [],
  templateUrl: './member-view.component.html'
})
export class MemberViewComponent {

  public member = input.required<Member>();

}
