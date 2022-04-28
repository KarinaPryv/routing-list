import { Injectable } from '@angular/core';
import { UserModel } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private users = new Array<UserModel>();
  private indexOfEditedUser!: number;
  
  constructor() { }

  getAllUsers() {
    return this.users;
  }

  addNewUser(login: string, password: string, email: string) {
    let newUser = new UserModel();
    newUser.login = login;
    newUser.password = password;
    newUser.email = email;

    this.users.push(newUser);
  }

  deleteUser(userIndex: number) {
    this.users.splice(userIndex, 1);
  }

  findUserByIndex(userIndex: number) {
    this.indexOfEditedUser = userIndex;
    return this.users[userIndex];
  }

  saveEditedUser(login: string, password: string, email: string) {
    let editedUser = new UserModel();
    editedUser.login = login;
    editedUser.password = password;
    editedUser.email = email;
    this.users.splice(this.indexOfEditedUser, 1, editedUser);
  }
}