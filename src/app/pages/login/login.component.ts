import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  showPassword: boolean = false;

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  login() {
    if (this.username && this.password) {
      // In a real application, you would handle authentication here
      console.log('Login credentials submitted:', {
        username: this.username,
        password: this.password
      });
      // Redirect to dashboard after successful login
      // this.router.navigate(['/dashboard']);
    } else {
      alert('Please enter both username and password.');
    }
  }
}
