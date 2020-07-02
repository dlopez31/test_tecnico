import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { Formulario, Usuario } from '../../interfaces/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  public error: boolean;
  public formulario: Formulario = {
    password: "Nolodire20",
    type: "normal",
    username: "phbhelloworld@gmail.com"
  };

  constructor(public loginService: LoginService,
    private router: Router) { }

  submitLogin() {
    this.loginService.login(this.formulario)
      .subscribe((resp: Usuario) => {
        this.error = false;
        localStorage.setItem('usuario', JSON.stringify(resp));
        this.router.navigate(['/pendiente']);
      }, err => {
        this.error = true;
        localStorage.clear();
        console.log(err.error._error_message)
      });
  }
}
