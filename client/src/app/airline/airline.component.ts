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
  hubs: Array<String>;
  focusCities: Array<String>;
  destinations: Array<String>;
  originCountry: String;
  slogen: String;
  rewards: String;
  rating: number;

  constructor(private airlineService: AirlineService) {
  }

 addAirline(){
  const newAirline: Airline = {
    name: this.name,
    logo: this.logo,
    founded: this.founded,
    hubs: this.hubs,
    focusCities: this.focusCities,
    destinations: this.destinations,
    originCountry: this.originCountry,
    slogen: this.slogen,
    rewards: this.rewards,
    rating: this.rating
  }
  this.airlineService.addAirline(newAirline)
    .subscribe(user =>{
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
