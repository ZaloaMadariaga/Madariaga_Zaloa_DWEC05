import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Importar Router
import { GameConfig } from '../../models/game-config';
import { CommonModule } from '@angular/common';
import { JuegoComponent } from '../juego/juego.component';

@Component({
  selector: 'app-formulario',
  standalone: true, // Marcar como standalone
  imports: [ReactiveFormsModule, CommonModule, JuegoComponent], // Importar ReactiveFormsModule
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  formulario!: FormGroup;
  gameConfig!: GameConfig;
  numeroAleatorio!: number;
  intentosRestantes!: number;
  juegoIniciado: boolean = false;
  mensaje: string = '';
  entradaUsuario!: number;

  constructor(private fb: FormBuilder, private router: Router) {
    this.iniciarFormulario();
  }

  iniciarFormulario() {
    this.formulario = this.fb.group({
      nombre: ['', Validators.required],
      apellidos: ['', Validators.required],
      rango: [0, [Validators.required, Validators.min(4)]],
      intentos: [0, [Validators.required, Validators.min(1)]]
    });
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log("Datos del formulario", this.formulario.value);

      // Crear objeto de configuración del juego
      this.gameConfig = new GameConfig(
        this.formulario.value.nombre,
        this.formulario.value.apellidos,
        this.formulario.value.rango,
        this.formulario.value.intentos
      );

      // Generar número aleatorio en el rango establecido
      this.numeroAleatorio = Math.floor(Math.random() * this.gameConfig.rango);
      this.intentosRestantes = this.gameConfig.intentos;
      this.intentosRestantes = this.gameConfig.intentos;
            this.juegoIniciado = true;

      console.log('Configuración del juego:', this.gameConfig);
      console.log('Número aleatorio generado:', this.numeroAleatorio);
      console.log('Intentos restantes iniciales:', this.intentosRestantes);

      this.disabledForm()

      // Navegar a la ruta del juego
      // this.router.navigate(['/juego'], { state: { gameConfig: this.gameConfig } });
    } else {
      console.log("El formulario no es válido");
    }
  }

  disabledForm() {
    this.formulario.disable()
  }


}