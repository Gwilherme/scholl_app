import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
 // templateUrl: '/login.page.html',
  template: '<ion-app></ion-app>',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  user:any = {};
  
  constructor(private router: Router) {}

  console() {
    console.log(this.user);
    console.log("hello");
  }

  test() {
    console.log("test");
    this.router.navigate(['/login'])
  }

}

