import {Component, inject} from '@angular/core';
import {PersonService} from "../../../services/person.service";
import {AsyncPipe} from "@angular/common";
import {PersonViewComponent} from "../person-view/person-view.component";
import {createPerson, Person} from "../../../models/person.model";
import {PersonFormComponent} from "../person-form/person-form.component";


@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [
    AsyncPipe,
    PersonViewComponent,
    PersonFormComponent
  ],
  templateUrl: './person-list.component.html'
})
export class PersonListComponent {

  private personService: PersonService = inject(PersonService);

  protected persons$ = this.personService.persons$;
  protected isAdding: boolean = false;
  protected newPerson?: Person;
  protected personToEdit?: Person;


  onAddPerson() {
    this.isAdding = true;
    this.newPerson = createPerson('');
  }


  onCancel() {
    this.isAdding = false;
    this.newPerson = undefined;
    this.personToEdit = undefined;
  }


  onSubmitted(person: Person) {
    if (this.isAdding) {
      this.personService.addPerson(person);
    }

    this.isAdding = false;
    this.newPerson = undefined;
    this.personToEdit = undefined;
  }


  onRename(person: Person) {
    this.personToEdit = person;
    this.isAdding = false;
  }


  onDelete(person: Person) {
    this.personService.removePerson(person);
  }
}
