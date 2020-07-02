import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoriaService {

  public url = environment.urlBase;

  constructor(private http: HttpClient) { }

  obtenerHistoria(token: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`,
    });
    return this.http.get(`${this.url}userstories?project=46`, { headers });
  }
}
