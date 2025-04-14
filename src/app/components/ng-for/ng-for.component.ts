import { NgFor } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ngfor',
  imports: [NgFor],
  templateUrl: './ng-for.component.html',
  styleUrls: ['./ng-for.component.css'] // Fixed typo (styleUrl -> styleUrls)
})
export class NgForComponent {
  cityList: string[] = ['New York', 'Los Angeles', 'Chicago', 'Houston', 'Phoenix'];

  employeeArray: any[] = [ // Fixed typo (emplyeeArr -> employeeArray)
    { name: 'John', age: 30, city: 'New York' },
    { name: 'Jane', age: 25, city: 'Los Angeles' },
    { name: 'Mike', age: 35, city: 'Chicago' },
    { name: 'Sara', age: 28, city: 'Houston' },
    { name: 'Tom', age: 32, city: 'Phoenix' }
  ];
}
