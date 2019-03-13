import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  templateUrl: './cabecera.component.html',
  styleUrls: ['./cabecera.component.css']
})
export class CabeceraComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cursos:string[] = ['Css','HTML','Angular','Docker']
  personas:Array<any> = [
    {genero:'Masculino',nombre:'Raul', edad:'25'},
    {genero:'Femenino',nombre:'Kelly', edad:'25'},
  ]
}
