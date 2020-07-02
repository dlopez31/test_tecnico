import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Formulario } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = environment.urlBase;

  constructor(private http: HttpClient) { }

  login(formulario: Formulario) {
    return this.http.post(`${this.url}auth`, formulario);
  }
}
