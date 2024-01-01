import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  username: String = '';
  password: String = '';
  hide = true;
  userData: any;
  constructor(private servicesService: ServicesService, private router: Router) { }

  setUserData() {

    this.servicesService.getUsersData().subscribe(
      data => {
        this.userData = data;
        console.log(data);
        this.checkDetails();
      },
      error => {
        console.log('ERROR', error);
      }
    )
  }

  checkDetails(): void {
    this.userData.forEach((element: { username: String; password: String }): void => {
      if (element.username === this.username && element.password === this.password) {
        console.log(element.username);
        this.router.navigateByUrl('/insert');
      }
      else {
        console.log('Incorrect Details');
        this.router.navigateByUrl('/');
      }
    });
  }


  getRegister() {
    this.router.navigateByUrl('/register');
  }

}
