import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/trip-service/trip.service";

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss']
})

export class ToursPageComponent implements OnInit{
    tours: any

    constructor(private tripService: TripService) {
    }
    ngOnInit(): void {
      this.getAllTrips()
    }

    getAllTrips(){
      this.tripService.getAllTrips().subscribe((res)=>{
        this.tours = res
      });
    }
}

