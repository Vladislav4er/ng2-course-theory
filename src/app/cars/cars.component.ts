import { Component } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent {

  addCarSatus = '';
  inputText = '';

  constructor() {
  }

  addCar() {
    this.addCarSatus = 'Машина добавлена';
  }

  onKeyUp(event) {
      this.inputText =  event.target.value;
  }
}
