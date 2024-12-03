import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { FormsModule } from '@angular/forms'; // Importa FormsModule
import { MatInputModule } from '@angular/material/input'; // Importa MatInputModule
import { MatButtonModule } from '@angular/material/button'; // Importa MatButtonModule
import { MatFormFieldModule } from '@angular/material/form-field'; // Importa MatFormFieldModule
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule
  ]
})

export class LoginComponent {
  email: string = '';
  password: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    this.authService.login(this.email, this.password).subscribe(
      response => {
        console.log('Login exitoso', response);
        alert('Credenciales correctas'); // Muestra una ventana emergente

        this.router.navigate(['bienvenido']); // Redirige al componente Bienvenido
      },
      error => {
        console.error('Error de inicio de sesión', error);
        alert('Credenciales incorrectas'); // Muestra una ventana emergente
      }
    );
  }
}
