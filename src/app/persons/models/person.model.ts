import {v4 as uuid} from 'uuid';


export interface Person {

  id: string;
  name: string;

}


export function createPerson(name: string): Person {
  return {
    id: uuid(),
    name: name
  }
}
