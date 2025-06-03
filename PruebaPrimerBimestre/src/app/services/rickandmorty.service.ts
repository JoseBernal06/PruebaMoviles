
import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc } from '@angular/fire/firestore'

@Injectable({
  providedIn: 'root'
})
export class RickAndMortyService {
  constructor(private firestore: Firestore) {}

  guardarBusquedas(
    nombre: string,
    especie: string,
    estado: string,
    origen: string,
    imagen: string,
  ) {
    const coleccion = collection(this.firestore, 'busquedas');
    return addDoc(coleccion, {
      nombre,
      especie,
      estado,
      origen,
      imagen,
    });
  }
}*/
