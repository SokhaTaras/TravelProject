import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { mainLink } from 'src/app/Enums/main-link';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {}

  getAllTrips(){
    return this.http.get(`${mainLink}/main`)
  }

  getTripsByCountry(country: string){
    return this.http.get(`${mainLink}/main?country=${country}`);
  }

  getTripsByCity(city: string){
    return this.http.get(`${mainLink}/main?city=${city}`);
  }

  getTripsByPriceBetween(minPrice: number, maxPrice: number){
    return this.http.get(`${mainLink}/main?minPrice=${minPrice}&maxPrice=${maxPrice}`);
  }

  getTripsByDuration(duration: number){
    return this.http.get(`${mainLink}/main?duration=${duration}`)
  }

}
