import { Component, OnInit } from '@angular/core';
import { EquipoService } from './../equipo.service'

@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.css']
})
export class NosotrosComponent implements OnInit {

  equipo:any[] = [];
  constructor(private servicio:EquipoService) { 
    console.log('Funcionando Servicio')
    this.equipo = servicio.obtenerEquipo();
  }

  ngOnInit() {
  }

}
