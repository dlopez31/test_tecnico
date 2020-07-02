import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  public login = {
    password: "Nolodire20",
    type: "normal",
    username: "phbhelloworld@gmail.com"
  };

  constructor(private loginService: LoginService,
    private router: Router) { }

  submitLogin(formLogin: NgForm) {
    if (formLogin.valid) {
      this.loginService.login(this.login)
        .subscribe(() => this.router.navigate(['/pendiente'])
          , err => console.log(err.error._error_message))
    } else {
      console.log('No es valido');
    }
  }
}
