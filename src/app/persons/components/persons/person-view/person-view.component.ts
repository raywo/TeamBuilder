import {Component, EventEmitter, input, Output} from '@angular/core';
import {Person} from "../../../models/person.model";
import {FaIconComponent} from "@fortawesome/angular-fontawesome";
import {faPencil} from "@fortawesome/free-solid-svg-icons";
import {NgbTooltip} from "@ng-bootstrap/ng-bootstrap";
import {faTrashCan} from "@fortawesome/free-regular-svg-icons";

@Component({
  selector: 'app-person-view',
  standalone: true,
  imports: [
    FaIconComponent,
    NgbTooltip
  ],
  templateUrl: './person-view.component.html'
})
export class PersonViewComponent {

  public person = input.required<Person>();
  @Output() rename = new EventEmitter<Person>();
  @Output() delete = new EventEmitter<Person>();

  protected pen = faPencil;
  protected trash = faTrashCan;

  onRename() {
    this.rename.emit(this.person());
  }

  onDelete() {
    this.delete.emit(this.person());
  }
}
