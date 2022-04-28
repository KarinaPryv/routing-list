import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserModel } from 'src/app/shared/models/user.model';
import { UsersService } from 'src/app/shared/services/users.service';

@Component({
  selector: 'app-userList',
  templateUrl: './userList.component.html',
  styleUrls: ['./userList.component.scss']
})
export class UserListComponent implements OnInit {

  public newUser = new UserModel();
  public usersArr = new Array<UserModel>();
  public addStatus = true;
  public isInvalid = false;
  
  constructor(public UsersService: UsersService) { }

  ngOnInit(): void {
    this.usersArr = this.UsersService.getAllUsers();
  }

  addNewUser(form: NgForm) {
    this.UsersService.addNewUser(this.newUser.login, this.newUser.password, this.newUser.email);
    form.reset();
  }

  editUser(userIndex: number) {
    let editUser: UserModel = this.UsersService.findUserByIndex(userIndex);
    this.newUser.login = editUser.login;
    this.newUser.password = editUser.password;
    this.newUser.email = editUser.email;
    this.addStatus = false;
  }

  saveEditedUser(form: NgForm) {
    this.UsersService.saveEditedUser(this.newUser.login, this.newUser.password, this.newUser.email);
    this.addStatus = true;
    form.reset();
  }

  deleteUser(userIndex: number) {
    this.UsersService.deleteUser(userIndex);
  }

}
