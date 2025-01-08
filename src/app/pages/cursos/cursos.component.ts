import { Component } from '@angular/core';
import { Curso } from '../../models/curso.model';
import { CursosService } from '../../services/cursos.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {
  cursos: Curso[] = [];

  constructor(private CursosService: CursosService) { }
  ngOnInit(): void {
    this.CursosService.getCursos().subscribe(data => {
      this.cursos = data;
    });
  }

}
