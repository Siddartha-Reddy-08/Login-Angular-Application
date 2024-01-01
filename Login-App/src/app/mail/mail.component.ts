import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services/services.service';

@Component({
  selector: 'app-mail',
  templateUrl: './mail.component.html',
  styleUrls: ['./mail.component.scss']
})
export class MailComponent implements OnInit {

  mailId: any;
  subject: any;
  body: any;

  constructor(private service: ServicesService) { }

  ngOnInit(): void {

  }

  sendMailData() {
    const data = {
      mailId:this.mailId,
      subject:this.subject,
      body: this.body
    };
    this.service.setMailData(data).subscribe();

  }


}
