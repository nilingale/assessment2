import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, tap } from 'rxjs/operators';

import { Airline } from '../models/airline';

@Injectable()
export class AirlineService {

  constructor(private http: HttpClient) {
  }

  //retriving Airline
  getAirlines() {
    return this.http.get<Airline[]>('http://localhost:3000/api/airlines');
  }

  //Add Airline
  addAirline(newAireline: Airline): Observable<Airline> {
    var headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post<Airline>('http://localhost:3000/api/airline', newAireline, { headers: headers }).pipe(
      tap((airline: Airline) => this.log('added airline w/ id=${airline._id}')),
      catchError(this.handleError<Airline>('addAireline'))
    );
  }

  //delete Airline
  deleteAirline(id): Observable<Object> {
    return this.http.delete('http://localhost:3000/api/airline/' + id).pipe(
      tap(_ => this.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Airline>('deleteHero'))
    );
  }

  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for airline consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a AirelineService message with the MessageService */
  private log(message: string) {
    //this.messageService.add('AirelineService: ' + message);
  }

}
