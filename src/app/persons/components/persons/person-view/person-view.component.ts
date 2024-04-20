import {Component, EventEmitter, input, Output} from '@angular/core';
import {Person} from "../../../models/person.model";

@Component({
  selector: 'app-person-view',
  standalone: true,
  imports: [],
  templateUrl: './person-view.component.html'
})
export class PersonViewComponent {

  public person = input.required<Person>();
  @Output() rename = new EventEmitter<Person>();
  @Output() delete = new EventEmitter<Person>();

  onRename() {
    this.rename.emit(this.person());
  }

  onDelete() {
    this.delete.emit(this.person());
  }
}
