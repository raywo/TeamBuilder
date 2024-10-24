import {Component, input, OnInit, output} from '@angular/core';
import {createPerson, Person} from "../../../models/person.model";
import {FormsModule} from "@angular/forms";
import {AutofocusDirective} from "../../../../shared/directives/autofocus.directive";


@Component({
  selector: 'app-person-form',
  standalone: true,
  imports: [
    FormsModule,
    AutofocusDirective
  ],
  templateUrl: './person-form.component.html'
})
export class PersonFormComponent implements OnInit {

  public person = input.required<Person>();
  public cancelled = output<Person>();
  public submitted = output<Person>();

  protected personToEdit: Person = createPerson('');


  ngOnInit(): void {
    this.personToEdit = this.person();
  }


  public onSubmit(): void {
    this.submitted.emit(this.personToEdit);
  }
}
