import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
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

    constructor(private tripService: TripService, private cdr: ChangeDetectorRef) {}
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


  // filterTrips(): void {
  //   let filteredTours = this.tours;
  //   console.log('filter',filteredTours);
  //   // Фільтрація за тривалістю
  //   if (this.duration > 0) {
  //     filteredTours = filteredTours.filter((tour: any) => {
  //       console.log(tour.duration === this.duration)
  //       return tour.duration === this.duration;
  //     });
  //     console.log('dur',filteredTours);
  //   }
  //
  //   // Фільтрація за ціною
  //   if (this.minPrice > 0 && this.maxPrice > 0) {
  //     filteredTours = filteredTours.filter((tour: any) => tour.price >= this.minPrice && tour.price <= this.maxPrice);
  //     console.log('price',filteredTours);
  //   }
  //
  //   // Фільтрація за країною
  //   if (this.selectedCountry) {
  //     filteredTours = filteredTours.filter((tour: any) => tour.countries.split(',').includes(this.selectedCountry));
  //   }
  //
  //   // Фільтрація за містом
  //   if (this.selectedCity) {
  //     filteredTours = filteredTours.filter((tour: any) => tour.city === this.selectedCity);
  //     console.log('city',filteredTours);
  //   }
  //   console.log('filter2',filteredTours);
  //   this.tours = filteredTours;
  // }

  resetFilters(): void {
    this.duration = 0;
    this.minPrice = 0;
    this.maxPrice = 0;
    this.selectedCountry = '';
    this.selectedCity = '';

    this.getAllTrips();
  }

  ngAfterViewChecked(): void {
    this.cdr.detectChanges();
  }

}

