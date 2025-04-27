import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface ProjectDetails {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  status: string;
  teamMembers: string[];
}

@Component({
  selector: 'app-project-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './select-project.component.html',
  styleUrls: ['./select-project.component.css']
})
export class SelectProjectComponent implements OnInit {
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

  // Project details (mock data)
  projectDetails: { [key: string]: ProjectDetails } = {
    'I4.0 TPM': {
      name: 'I4.0 TPM',
      description: 'Industry 4.0 Total Productive Maintenance Implementation',
      startDate: '2024-03-01',
      endDate: '2024-12-31',
      status: 'In Progress',
      teamMembers: ['John Doe', 'Jane Smith', 'Mike Johnson']
    },
    'MRO Collab': {
      name: 'MRO Collab',
      description: 'Maintenance, Repair, and Overhaul Collaboration Platform',
      startDate: '2024-02-15',
      endDate: '2024-11-30',
      status: 'Planning',
      teamMembers: ['Sarah Wilson', 'Tom Brown', 'Lisa Davis']
    },
    // Add more project details as needed
  };

  showModal = false;
  selectedProject: ProjectDetails | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Additional initialization logic if needed
  }

  // Method to handle project selection
  selectProject(project: string): void {
    this.selectedProject = this.projectDetails[project] || {
      name: project,
      description: 'Project details not available',
      startDate: 'N/A',
      endDate: 'N/A',
      status: 'Not Started',
      teamMembers: []
    };
    this.showModal = true;
  }

  // Method to close the modal
  closeModal(): void {
    this.showModal = false;
    this.selectedProject = null;
  }

  // Method to navigate to home
  navigateToHome(): void {
    this.router.navigate(['/home']);
  }

  // Method to handle logout
  logout(): void {
    // Implement actual logout logic here
    this.router.navigate(['/login']);
  }

  navigateToAddTask(): void {
    if (this.selectedProject) {
      this.router.navigate(['/add-task'], {
        state: { 
          project: {
            name: this.selectedProject.name,
            description: this.selectedProject.description,
            startDate: this.selectedProject.startDate,
            endDate: this.selectedProject.endDate,
            status: this.selectedProject.status,
            teamMembers: this.selectedProject.teamMembers
          }
        }
      });
    }
  }
}