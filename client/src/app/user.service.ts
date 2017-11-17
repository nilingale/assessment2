import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {User} from './user';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {
  }

  //retriving User
  getUsers() {
    return this.http.get<User[]>('http://localhost:3000/api/users');
  }

  //Add User
  addUser(newUser: User): Observable<User> {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<User>('http://localhost:3000/api/user', newUser, {headers: headers}).pipe(
      tap((user: User) => this.log('added user w/ id=${user._id}')),
      catchError(this.handleError<User>('addUser'))
    );
  }

  //delete User
  deleteUser(id): Observable<User> {
    return this.http.delete<User>('http://localhost:3000/api/user/' + id).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<User>('deleteHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a UserService message with the MessageService */
  private log(message: string) {
    //this.messageService.add('UserService: ' + message);
  }
}
