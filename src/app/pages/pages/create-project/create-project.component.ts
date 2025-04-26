import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

interface TeamMember {
  name: string;
  role: string;
}

@Component({
  selector: 'app-create-project',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.css']
})
export class CreateProjectComponent implements OnInit {
  projectForm: FormGroup;
  activeTab: string = 'project';
  showModal: boolean = false;
  
  teamMembers: TeamMember[] = [
    { name: 'Tejas', role: 'Lead' }
  ];

  constructor(private fb: FormBuilder) {
    this.projectForm = this.fb.group({
      projectName: ['14.0 TPM'],
      startDate: ['03-02-25'],
      endDate: ['31-05-25']
    });
  }

  ngOnInit(): void {
    // Any initialization logic can go here
  }

  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }

  removeMember(index: number): void {
    this.teamMembers.splice(index, 1);
  }

  openAddMemberDialog(): void {
    // This would typically open a dialog to add a new member
    // For simplicity, let's just add a hard-coded member
    this.teamMembers.push({ name: 'New Member', role: 'Developer' });
  }

  onSubmit(): void {
    if (this.projectForm.valid) {
      this.showModal = true;
    }
  }

  closeModal(): void {
    this.showModal = false;
  }

  // Close modal when clicking outside of it
  // @HostListener('window:click', ['$event'])
  onWindowClick(event: any): void {
    const modal = document.querySelector('.modal');
    if (event.target === modal) {
      this.showModal = false;
    }
  }
}