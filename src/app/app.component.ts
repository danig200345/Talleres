import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Talleres';

  showHeader = true;

  constructor(private router: Router) {
    // Detectar cambios en la ruta
    this.router.events.subscribe(() => {
      // Ocultar header en las rutas marcadas
      this.showHeader = !this.router.url.includes('login') && !this.router.url.includes('register') && !this.router.url.includes('admin');
    });
  }
}
