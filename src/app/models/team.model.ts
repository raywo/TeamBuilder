import {v4 as uuid} from 'uuid';
import {Person} from "./person.model";

export interface Team {

  id: string;
  members: Person[];

}


export function createTeam(members: Person[] = []): Team {
  return {
    id: uuid(),
    members: members
  }
}
