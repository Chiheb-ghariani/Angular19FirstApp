import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ng-class',
  imports: [NgClass,FormsModule],
  templateUrl: './ng-class.component.html',
  styleUrls: ['./ng-class.component.css'] // Fixed typo (styleUrl -> styleUrls)
})
export class NgClassComponent {
  divBgColor: string = "bg-success";
  isChecked: boolean = false;
  div3ClassName: string = '';


  addDiv1Color(className: string) {
    this.divBgColor = className;
    
  }
}
