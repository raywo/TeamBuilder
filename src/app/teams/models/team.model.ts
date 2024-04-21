import {v4 as uuid} from 'uuid';
import {Member} from "./member.model";


export interface Team {

  id: string;
  teamNumber: number;
  members: Member[];

}


export function createTeam(teamNumber: number, members: Member[] = []): Team {
  return {
    id: uuid(),
    teamNumber,
    members
  }
}
