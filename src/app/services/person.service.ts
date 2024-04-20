import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {createPerson, Person} from "../models/person.model";

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private personsSubject: BehaviorSubject<Person[]> = new BehaviorSubject<Person[]>([]);
  public readonly persons$: Observable<Person[]> = this.personsSubject.asObservable();

  public addPerson(person: Person) {
    this.persons = [...this.persons, person];
  }

  public removePerson(person: Person) {
    this.persons = this.persons.filter(p => p.id !== person.id);
  }

  public createFakeData(): void {
    this.addPerson(createPerson('Peter'));
    this.addPerson(createPerson('Paul'));
    this.addPerson(createPerson('Mary'));
  }


  private get persons(): Person[] {
    return this.personsSubject.getValue();
  }

  private set persons(persons: Person[]) {
    this.personsSubject.next(persons);
  }
}
