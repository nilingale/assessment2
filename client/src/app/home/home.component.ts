import { Component, OnInit } from '@angular/core';
import {AirlineService} from '../services/airline.service';
import {Airline} from '../models/airline';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [AirlineService]
})
export class HomeComponent implements OnInit {
  top10Year: Array<Airline>;
  top10AllTime: Array<Airline>;

  constructor(private airlineService: AirlineService) { }

  ngOnInit() {
    this.airlineService.getAirlines()
    .subscribe(airlines => this.top10Year = airlines);
  }

}
