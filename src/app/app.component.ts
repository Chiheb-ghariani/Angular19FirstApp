import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { UserComponent } from './components/user/user.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgIfComponent } from './components/ng-if/ng-if.component';
import { NgForComponent } from './components/ng-for/ng-for.component';
import { NgClassComponent } from './components/ng-class/ng-class.component'; // Import NgClassComponent
import { NgClass } from '@angular/common';
import { NgStyleComponent } from './components/ng-style/ng-style.component';

@Component({
  selector: 'app-root',
  imports: [DataBindingComponent, NgIfComponent, NgForComponent, NgClassComponent, NgClass,NgStyleComponent], // Ensure NgClassComponent is included
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular19app';
}
