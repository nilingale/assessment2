import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from './user';
import 'rxjs/add/operator/map';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  //retriving User
  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }

  //Add User
  addUser(newUser) {
    return this.http.post('http://localhost:3000/api/user', newUser);
  }

  //delete User
  deleteUser(id) {
    return this.http.delete('http://localhost:3000/api/user/' + id);
  }

}
