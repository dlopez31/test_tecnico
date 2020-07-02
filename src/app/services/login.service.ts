import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public url = environment.urlBase;

  constructor(private http: HttpClient) { }

  login(usuario: any) {
    return this.http.post(`${this.url}auth`, usuario)
      .pipe(tap((resp: any) => {
        let usuario = {
          token: resp.auth_token,
          username: resp.username,
          avatar: resp.photo
        };
        localStorage.setItem('usuario', JSON.stringify(usuario));
      }));
  }
}
