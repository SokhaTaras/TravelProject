import {Component, OnInit} from '@angular/core';
import {TripService} from "../../services/trip-service/trip.service";

@Component({
  selector: 'app-tours-page',
  templateUrl: './tours-page.component.html',
  styleUrls: ['./tours-page.component.scss']
})
export class ToursPageComponent implements OnInit{
    constructor(private tripService: TripService) {
    }

    ngOnInit(): void {
        // this.tripService.getAllTrips().subscribe((val)=>{
        //   console.log(val)
        // });
    }


}

