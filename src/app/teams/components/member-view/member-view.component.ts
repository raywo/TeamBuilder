import {Component, input} from '@angular/core';
import {Member} from "../../models/member.model";
import {faCar} from "@fortawesome/free-solid-svg-icons";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faCompass} from "@fortawesome/free-regular-svg-icons";


@Component({
  selector: 'app-member-view',
  standalone: true,
  imports: [
    FaIconComponent
  ],
  templateUrl: './member-view.component.html'
})
export class MemberViewComponent {

  public member = input.required<Member>();

  protected car = faCar;
  protected compass = faCompass;

}
