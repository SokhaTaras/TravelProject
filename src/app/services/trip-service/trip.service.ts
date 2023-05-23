import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import { mainLink } from 'src/app/Link/main-link';

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {}

  getAllTrips(){
    return this.http.get(`${mainLink}/main`)
  }

  getTripsByCountry(){

  }
  getTripsByCity(){

  }
  getTripsByPriceLessThan(){

  }
  getTripsByPriceGreaterThan(){

  }
  getTripsByPriceBetween(minPrice: number, maxPrice: number){
    return this.http.get(`${mainLink}/main/getTripsByPriceBetween/${minPrice}`)
  }
  getTripsByDuration(duration: number){
    return this.http.get(`${mainLink}/main?duration=${duration}`)
  }


}
