import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Routes } from '@angular/router'; // Importar para configurar rutas
import { AppComponent } from './app/app.component';
import { FormularioComponent } from './app/componentes/formulario/formulario.component';

// Definir las rutas
const routes: Routes = [
  { path: 'formulario', component: FormularioComponent },
  { path: '', redirectTo: '/formulario', pathMatch: 'full' } // Ruta por defecto
];

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes) // Configurar las rutas
  ]
}).catch(err => console.error(err));