import { Injectable } from '@angular/core';
import { Curso } from '../models/curso.model';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  //variable privada que almacena la api de los cursos
  private collection = 'http://localhost:4000/'

  constructor(private http: HttpClient) { }

  // Método para obtener todos los cursos
  getCursos(): Observable<Curso[]> {
    const ruta = 'cursos'
    let url = this.collection + ruta;
    return this.http.get<Curso[]>(url);
  }
  getCursoById(id: number): Observable<Curso> {
    const ruta = `cursos/${id}`
    let url = this.collection + ruta;
    return this.http.get<Curso>(url);
  }
  // cursos.service.ts
  postCurso(objecto: Curso): Observable<Curso> {
    const ruta = 'cursos'
    let url = this.collection + ruta;
    // Aquí le mandamos al backend un objeto con nombre, imagen y link
    return this.http.post<Curso>(url, { objecto });
  }



}
