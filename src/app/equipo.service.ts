import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[] = [
    {
      nombre: 'Ignacio',
      especialidad: 'HTML',
      descripcion: 'Hola mundo desde servicios'
    },
    {
      nombre: 'Maria',
      especialidad: 'CSS',
      descripcion: 'Experta en CSS'
    },
  ]
  constructor() { }

  obtenerEquipo() {
    return this.equipo;
  }
}
