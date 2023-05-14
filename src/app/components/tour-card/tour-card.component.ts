import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit{
  @Input() tour:any;
  countries:any
  cities:any

  ngOnInit() {
    this.getTitle();
    this.getCities();
  }

  getTitle() {
    this.countries = this.tour.countries.split(',');
    let firstCountry = this.countries[0];
    let lastCountry = this.countries[this.countries.length - 1];
    let upgradedCountry = this.countries[this.countries.length - 2];

    if (firstCountry === lastCountry) {
      return `${firstCountry}-${upgradedCountry}`;
    } else {
      return `${firstCountry}-${lastCountry}`;
    }
  }

  getCities(){
    this.cities = this.tour.cities.split(',');
    let firstCountry = this.cities[0];
    let lastCountry = this.cities[this.cities.length - 1];
    return `${firstCountry}-${lastCountry}`;
  }

  redirect(){
    window.location.href = this.tour.reference;
  }
}
