import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/trip-service/trip.service";


@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss']
})

export class ToursPageComponent implements OnInit{
    tours: any
    duration: number = 1;

    constructor(private tripService: TripService) {}
    ngOnInit(): void {
      this.getAllTrips()
    }

    getAllTrips() : void{
      this.tripService.getAllTrips().subscribe((res)=>{
        this.tours = res
      });
    }

  getAllTripsByDuration(duration: number): void {
    if (duration !== null) {
      this.tripService.getTripsByDuration(duration).subscribe(res => {
        this.tours = res;
      });
    } else {
      this.getAllTrips();
    }
  }

}

