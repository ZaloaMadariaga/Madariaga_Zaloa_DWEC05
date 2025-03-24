import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FormularioComponent } from './componentes/formulario/formulario.component';


@Component({
  selector: 'app-root',
  standalone: true, // Marcar como standalone
  imports: [RouterOutlet], // Importar RouterOutlet
  template: `
    <router-outlet></router-outlet> <!-- Usar RouterOutlet para mostrar las rutas -->
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {}