import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  firstName: string = 'John';
  rollNo: number = 123;
  isActive: boolean = true;
  currentDate: Date = new Date();
  myPlaceholder: string = 'Enter your name';
  div1className: string = 'pg-primary';
  selectedCity: string = "";

  constructor(){
    console.log(this.firstName)

    this.isActive = false;
    console.log(this.isActive)
    this.showWelcomeMessage()
  }

  showWelcomeMessage() {
    alert('Welcome to Angular!');
  }
  onCityChange() {

    console.log('City changed!');
    } 
   }
