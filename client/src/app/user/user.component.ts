import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {User} from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[UserService]
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

  constructor(private userService : UserService) {
  }

  ngOnInit() {
      this.userService.getUsers()
          .subscribe(users => this.users = users);
  }

}
