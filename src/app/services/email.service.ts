import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class EmailService {

  constructor(
    private http: HttpClient
  ) { }

  sendEmail(emailData: any) {
    return this.http.post('http://localhost:3000/send-email', emailData)
  }

}
