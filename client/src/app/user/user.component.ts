import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {User} from '../models/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers: [UserService]
})
export class UserComponent implements OnInit {

  users: User[];
  user: User;
  firstName: string;
  middleName: string;
  lastName: string;
  email: string;
  userName: string;
  password: string;
  isAdmin: boolean;

  constructor(private userService: UserService) {
  }

  addUser() {
    const  newUser: User = {
      firstName: this.firstName,
      middleName: this.middleName,
      lastName: this.lastName,
      email: this.email,
      userName: this.userName,
      password: this.password,
      isAdmin: false
    }
    this.userService.addUser(newUser)
      .subscribe(user => {
        /*console.log("after adding");
        console.log(user);
        this.users.push(user);*/
        this.getUsers();
      });
  }

  deleteUser(id: any) {
    var users = this.users;
    this.userService.deleteUser(id)
      .subscribe(data => {
        console.log(data);
      /*  if (data.n == 1) {
          for (var i = 0; i < users.length; i++) {
            if (users[i]._id == id) {
              users.splice(i, 1);
            }
          }
        }*/
      })
  }

  ngOnInit() {
    this.getUsers();
  }

  private getUsers(){
    this.userService.getUsers()
      .subscribe(users => this.users = users);
  }
}
