import { Component } from '@angular/core';

@Component({
  selector: 'app-ng-style',
  templateUrl: './ng-style.component.html',
  styleUrls: ['./ng-style.component.css']
})
export class NgStyleComponent {
  div1BckColor: string = 'white'; // Default background color

  addDiv1Color(color: string) {
    this.div1BckColor = color; // Update the background color
  }
}
