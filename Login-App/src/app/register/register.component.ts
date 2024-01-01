import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  username: String = '';
  password: String = '';
  confirm_password: String = '';

  constructor(private service: ServicesService) {
  }

  ngOnInit(): void {

  }

  setRegisterData(): void {
    const newUser ={
      
    }
    this.service.setRegisterData(newUser).subscribe(
      data =>{

      },
      error => {
        console.log("ERROR");
      }
    );
  }

}
