import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.scss']
})
export class InsertComponent {

  rollNo: String = '';
  name: String = '';

  constructor(private http: HttpClient, private service: ServicesService) { }

  sendInsertData() {
    const insertData = {
      rollNo: this.rollNo,
      name: this.name,
    }
    this.service.setInsert(insertData).subscribe(
      data => { 
        console.log(data);
        console.log(insertData.rollNo);
      },
      error => {
        console.log('ERROR',error);
      }

    );
  }

}
