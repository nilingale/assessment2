import {Hub} from "./hub"; 

export class Airline {
    _id?: String;
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
}