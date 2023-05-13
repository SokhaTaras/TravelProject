import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TripService {

  constructor(private http: HttpClient) {}

  getAllTrips(){
    return this.http.get('http://localhost:4200/TravelProject/main')
  }
}
