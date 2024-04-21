import {Person} from "../../persons/models/person.model";


export interface Member {

  isDriver: boolean;
  person: Person;

}


export function createMember(isDriver: boolean, person: Person): Member {
  return {
    isDriver,
    person
  }
}
