import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.scss']
})
export class DisplayComponent {

  myresponse: any;

  displayedColumns: string[] = ['sno', 'rollNo', 'name'];

  constructor(private _http: HttpClient, private service: ServicesService) { }

  insertedData() {
    this.service.getInsertedData().subscribe(
      data =>{
        this.myresponse=data;
        console.log(this.myresponse);
      },
    );
  }

}
