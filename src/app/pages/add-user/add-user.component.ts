import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css'],
  standalone: true,
  imports: [CommonModule,FormsModule] 
})
export class AddUserComponent {
  user = {
    name: '',
    username: '',
    password: '',
    role: ''
  };
  showSuccessModal = false;

  constructor(private router: Router) {}

  // Switch between tabs
  activeTab = 'add'; // Default tab

  switchTab(tab: string) {
    console.log(`${tab}`)
    this.router.navigate([`/${tab}`]);
    // In a real application, you would handle tab switching logic
}

  onSubmit() {
    // Add the logic to send data to the server (via a service)
    console.log('User added:', this.user);

    // Show success modal
    this.showSuccessModal = true;

    // After 2 seconds, reset form and close the modal
    setTimeout(() => {
      this.showSuccessModal = false;
      this.user = { name: '', username: '', password: '', role: '' };
    }, 2000);
  }

  closeModal() {
    this.showSuccessModal = false;
  }

  addAnotherUser() {
    // Logic to add another user after the success
    this.user = { name: '', username: '', password: '', role: '' };
  }

  logout(): void {
    if (confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
  }
}


