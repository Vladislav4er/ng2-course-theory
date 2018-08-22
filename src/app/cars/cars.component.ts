import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  carName = '';
  addCarStatus = false;
  cars = ['Ford', 'Audi', 'BMW', 'Mazda', 'Lada', 'Skoda'];
  dates = [
    new Date(2014, 3, 6).toDateString(),
    new Date(2011, 5, 4).toDateString(),
    new Date(2015, 3, 8).toDateString(),
    new Date(2012, 4, 5).toDateString(),
    ];


  constructor() {
  }

  addCar() {
    this.addCarStatus = true;
    this.cars.push(this.carName);
    this.carName = '';
  }

  setBigCarText(car: string) {
    return car.length > 4 ? true : false;
  }




}
