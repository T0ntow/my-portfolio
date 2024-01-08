import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent implements OnInit {
  emailForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private alertController: AlertController,
    private emailService: EmailService,
    private toastController: ToastController,
    private loadingController: LoadingController
  ) {
    this.emailForm = this.formBuilder.group({
      from: ['', Validators.required],
      to: ['wellingtonbs109@gmail.com'],
      nome: ['', Validators.required],
      texto: ['', Validators.required]
    });
  }

  ngOnInit() { }

  async sendEmail() {
    if (this.emailForm.valid) {
      const loading = await this.loadingController.create({
        message: 'Enviando mensagem...',
        spinner: 'crescent',
        translucent: true,
      });
  
      await loading.present();

      const emailData = {
        from: this.emailForm.value.from,
        to: 'wellingtonbs109@gmail.com',
        nome: this.emailForm.value.nome,
        texto: this.emailForm.value.texto
      };

      this.emailService.sendEmail(emailData).subscribe({
        next: (response) => {
          this.presentToast("Email enviado com sucesso", "success")
          loading.dismiss();
          this.emailForm.reset()
        },
        error: (error) => {
          this.presentToast("Falha ao enviar o e-mail", "danger")
          loading.dismiss();
          this.emailForm.reset()
        }
      });

    } else {
      this.presentToast("Por favor preencha o formulário corretamente!", "danger")
    }
  }

  async presentToast(text: string, color:string) {
    const toast = await this.toastController.create({
      message: text,
      color: color,
      duration: 2000
    });
    toast.present();
  }

}
