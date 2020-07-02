import { Component, OnInit } from '@angular/core';
import { HistoriaService } from 'src/app/services/historia.service';

@Component({
  selector: 'app-pendiente',
  templateUrl: './pendiente.component.html',
  styleUrls: ['./pendiente.component.css']
})
export class PendienteComponent implements OnInit {

  public usuario: any = JSON.parse(localStorage.getItem('usuario'));
  public listaHistoria: any;

  constructor(private historiaService: HistoriaService) { }

  ngOnInit(): void {
    console.log(this.usuario);


    this.historiaService.obtenerHistoria(this.usuario.token)
      .subscribe(resp => {
        this.listaHistoria = resp;
      })
  }

}
