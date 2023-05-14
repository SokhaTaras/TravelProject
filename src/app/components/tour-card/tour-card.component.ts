import { Component, Input, OnInit } from '@angular/core';
import {toNumbers} from "@angular/compiler-cli/src/version_helpers";

@Component({
  selector: 'app-tour-card',
  templateUrl: './tour-card.component.html',
  styleUrls: ['./tour-card.component.scss']
})
export class TourCardComponent implements OnInit{
  @Input() tour:any;
  countries:any
  cities:any
  price:any

  ngOnInit() {
    this.getTitle();
    this.getCities();
    this.getPrice();
  }

  getPrice(){
    let euro = (this.tour.price/40.5).toFixed(0)
    let dollar = (this.tour.price/37.5).toFixed(0)
    let hryvna = this.tour.price.toFixed(0)
    this.price = [dollar +' $', euro + ' €' , hryvna +' ₴']
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
    window.open(this.tour.reference, "_blank");
  }
}
