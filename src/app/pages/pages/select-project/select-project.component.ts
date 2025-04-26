import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})
export class SelectProjectComponent {
  // List of projects
  projects: string[] = [
    'I4.0 TPM',
    'MRO Collab',
    'BI Apps',
    'I4.0 HMI',
    'MRO WST',
    'MRO DOME',
    'I4.0 OACIS',
    'AMO licensing',
    'I4.0 SU'
  ];

  constructor(private router: Router) {}

  // Method to handle project selection
  selectProject(project: string): void {
    // You can implement navigation or other logic here
    console.log('Selected project:', project);
    // Example of showing an alert similar to the original code
    alert('Selected project: ' + project);
    
    // Navigate to project-specific route (uncomment when routes are set up)
    // this.router.navigate(['/project', project]);
  }

  // Method to navigate to home
  navigateToHome(): void {
    console.log('Navigate to home');
    // Navigate to home route (uncomment when routes are set up)
    // this.router.navigate(['/home']);
  }

  // Method to handle logout
  logout(): void {
    console.log('Logging out');
    // Implement actual logout logic here
    // Example:
    // this.authService.logout().subscribe(() => {
    //   this.router.navigate(['/login']);
    // });
  }
}