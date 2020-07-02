import { Component, OnInit } from '@angular/core';
import { HistoriaService } from 'src/app/services/historia.service';
import { Usuario, Historia } from '../../interfaces/interfaces';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['./pendiente.component.css']
})
export class PendienteComponent implements OnInit {

  public usuario: Usuario = JSON.parse(localStorage.getItem('usuario'));
  public listaHistoria: Historia[];

  constructor(private historiaService: HistoriaService) { }

  ngOnInit(): void {
    this.historiaService.obtenerHistoria(this.usuario.auth_token)
      .subscribe((resp: Historia[]) => {
        this.listaHistoria = resp;
      }, () => this.listaHistoria = []);
  }

}
