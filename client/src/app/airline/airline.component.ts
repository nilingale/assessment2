import { Component, OnInit } from '@angular/core';
import {AirlineService} from '../services/airline.service';
import {Airline} from '../models/airline';

@Component({
  selector: 'app-airline',
  templateUrl: './airline.component.html',
  styleUrls: ['./airline.component.css'],
  providers: [AirlineService]
})
export class AirlineComponent implements OnInit {
  airlines: Airline[];
  name: String;
  logo: String;
  founded: Date;
  hubs: String;
  focusCities: String;
  destinations: String;
  originCountry: String;
  slogen: String;
  rewards: String;
  rating: number;

  constructor(private airlineService: AirlineService) {
  }

 addAirline(){
    console.log(this.originCountry);
  const newAirline: Airline = {
    name: this.name,
    logo: this.logo,
    founded: this.founded,
    hubs: this.hubs.split(","),
    focusCities: this.focusCities.split(","),
    destinations: this.destinations.split(","),
    originCountry: this.originCountry,
    slogen: this.slogen,
    rewards: this.rewards,
    rating: this.rating
  }
  this.airlineService.addAirline(newAirline)
    .subscribe(airline =>{
      this.getAirlines();
    });
 }

 deleteAirline(id: any) {
  var airlines = this.airlines;
  this.airlineService.deleteAirline(id)
    .subscribe(data => {
      console.log(data);
      /* if (data.n == 1) {
        for (var i = 0; i < airlines.length; i++) {
          if (airlines[i]._id == id) {
            airlines.splice(i, 1);
          }
        }
      } */
    });
}

  ngOnInit() {
    this.getAirlines();
  }

  private getAirlines(){
    this.airlineService.getAirlines()
      .subscribe(airlines => this.airlines = airlines);
  }
}
