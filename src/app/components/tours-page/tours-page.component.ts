import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/trip-service/trip.service";
import {Cities, Countries} from "../../Enums/enums";


@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss']
})

export class ToursPageComponent implements OnInit{
    tours: any
    duration: number = 0;
    minPrice: number = 0;
    maxPrice: number = 0;
    countries = Countries
    cities = Cities;
    selectedCountry: string = '';
    selectedCity: string = '';

    constructor(private tripService: TripService) {}
    ngOnInit(): void {
      this.getAllTrips()
    }

    getAllTrips() : void{
      this.tripService.getAllTrips().subscribe((res)=>{
        this.tours = res
      });
    }

  getTripsByDuration(duration: number): void {
    if (duration !== null) {
      this.tripService.getTripsByDuration(duration).subscribe(res => {
        this.tours = res;
      });
    } else {
      this.getAllTrips();
    }
  }

  getTripsByPriceBetween(): void {
    this.tripService.getTripsByPriceBetween(this.minPrice, this.maxPrice).subscribe((res) => {
      this.tours = res;
    });
  }

  getTripsByCountry(): void{
    this.tripService.getTripsByCountry(this.selectedCountry).subscribe((res) => {
      this.tours = res;
    });
  }

  getTripsByCity(): void{
    this.tripService.getTripsByCity(this.selectedCity).subscribe((res) => {
      this.tours = res;
    });
  }

}

