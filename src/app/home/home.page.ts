import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.emailForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['wellingtonbs109@gmail.com'],
      email: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  sendEmail() {
    if (this.emailForm.invalid) {
      return;
    }
  
    const emailData = {
      from: this.emailForm.value.from,
      to: 'wellingtonbs109@gmail.com',
      email: this.emailForm.value.email,
      message: this.emailForm.value.message
    };
  
    // Fazer uma solicitação POST para o servidor
    fetch('http://localhost:3000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    })
    .then(response => response.text())
    .then(data => {
      console.log(data); // Mensagem de resposta do servidor
    })
    .catch(error => {
      console.error(error); // Tratamento de erros
    });
  }
  

}
