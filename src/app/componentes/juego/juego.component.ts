import { Component, Input } from '@angular/core';
import { GameConfig } from '../../models/game-config';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-juego',
  imports: [ReactiveFormsModule,  CommonModule],
  templateUrl: './juego.component.html',
  styleUrl: './juego.component.css'
})
export class JuegoComponent {

   @Input() gameConfig!: GameConfig;
   @Input() numeroAleatorio!: number;
   @Input() intentosRestantes!: number; // Declaración como propiedad de entrada

   formulario!: FormGroup;
   mensaje: string = '';


   constructor(private fb: FormBuilder) {
    this.initForm()  
  }

  initForm() {
    this.formulario = this.fb.group({
      numero: ['', [Validators.required, Validators.pattern(/^\d+$/)]], // Solo números
    });
  }

  comprobarNumero(): void {
    if (this.intentosRestantes > 0) {
      const numero = this.formulario.get('numero')?.value;
  
      if (numero > this.numeroAleatorio) {
        this.mensaje = `Introducido: ${numero} => Te pasaste`;
      } else if ((numero + 1) === this.numeroAleatorio) {
        this.mensaje = `Introducido: ${numero} => ¡Caliente!`;
      } else if ((numero + 2) === this.numeroAleatorio) {
        this.mensaje = `Introducido: ${numero} => ¡Templado!`;
      } else if ((numero + 3) <= this.numeroAleatorio) {
        this.mensaje = `Introducido: ${numero} => ¡Frío!`;
      } else if (numero === this.numeroAleatorio) {
        this.mensaje = `Introducido: ${numero} =>¡Has ganado!`;
        this.intentosRestantes = 0; // Termina el juego
        this.formulario.disable(); // Deshabilitar formulario
        return;
      }
  
      this.intentosRestantes--; // Reducir intentos restantes
  
      if (this.intentosRestantes === 0) {
        this.mensaje += ' 😢 ¡Se acabaron los intentos!';
        this.formulario.disable(); // Deshabilitar formulario al agotar los intentos
      }
    } else {
      this.mensaje = 'No tienes más intentos. Reinicia el juego para intentarlo de nuevo.';
      this.formulario.disable();
    }
  
    this.formulario.reset();
  }
}