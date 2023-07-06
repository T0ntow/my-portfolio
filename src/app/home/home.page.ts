import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  emailForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private alertController: AlertController) {
    this.emailForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['wellingtonbs109@gmail.com'],
      nome: ['', Validators.required],
      texto: ['', Validators.required]
    });
  }

  sendEmail() {
    console.log("send email");

    if (this.emailForm.invalid) {
      return;
    }

    const emailData = {
      from: this.emailForm.value.from,
      to: 'wellingtonbs109@gmail.com',
      nome: this.emailForm.value.nome,
      texto: this.emailForm.value.texto
    };

    console.log(emailData);

    // Fazer uma solicitação POST para o servidor
    fetch('http://localhost:3002/enviar-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(emailData)
    })
      .then(response => response.text())
      .then(async data => {
        console.log(data); // Mensagem de resposta do servidor
        this.emailForm.reset();
        const alert = await this.alertController.create({
          cssClass: "alert",
          header: 'Email enviado com sucesso',
          buttons: ['OK'],
        });

        await alert.present();

      })
      .catch(async error => {
        console.error(error); // Tratamento de erros
        const alert = await this.alertController.create({
          cssClass: "alert",
          header: 'Falha ao enviar email',
          buttons: ['OK'],
        });

        await alert.present();
      });
  }


  scrollToSection(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  selectedProject: string  = "projeto1";
  toggleProject(project: string) {
    this.selectedProject = project;
  }
  

}
