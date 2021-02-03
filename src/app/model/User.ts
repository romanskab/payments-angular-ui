import {Role} from './enums/Role';
import {State} from './enums/State';

export class User {
  constructor(
    public id?: number,
    public name?: string,
    public surname?: string,
    public email?: string,
    public password?: string,
    public repeatPassword?: string,
    public role?: Role,
    public state?: State
  ) {
  }
}
