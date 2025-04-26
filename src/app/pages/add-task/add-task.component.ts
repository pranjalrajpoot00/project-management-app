import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Task {
  id: number;
  name: string;
  description: string;
  starts: string;
  due: string;
  role: string;
  assignee: string;
  hours: string;
  status: string;
  comments: Comment[];
  // For form binding
  startDate?: string;
  dueDate?: string;
}

interface Comment {
  author: string;
  date: string;
  text: string;
}

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent implements OnInit {
  // Task data
  tasks: Task[] = [];
  
  // UI state
  activeTab: string = 'Project Management';
  isAddTaskVisible: boolean = false;
  isCommentModalVisible: boolean = false;
  
  // New task form data
  newTask: Partial<Task> = {
    name: '',
    description: '',
    startDate: '',
    dueDate: '',
    role: '',
    assignee: ''
  };
  
  // Comment modal data
  currentTaskId: number | null = null;
  currentTaskName: string = '';
  currentTaskComments: Comment[] = [];
  newComment: string = '';
  
  constructor() { }
  
  ngOnInit(): void {
    this.loadInitialData();
  }
  
  loadInitialData(): void {
    // Initial data
    this.tasks = [
      {
        id: 1,
        name: "User Story",
        description: "Create user stories for the new feature",
        starts: "03-02-25",
        due: "10-02-25",
        role: "Lead",
        assignee: "Tejas",
        hours: "48 h",
        status: "Completed",
        comments: [
          { author: "Sagar", date: "05-02-25", text: "Great work on this! Ready for the next phase." }
        ]
      },
      {
        id: 2,
        name: "Add Ribbon",
        description: "Design and implement the ribbon component",
        starts: "10-02-25",
        due: "20-02-25",
        role: "UI/UX",
        assignee: "Kritika",
        hours: "64 h",
        status: "In review",
        comments: [
          { author: "Kritika", date: "18-02-25", text: "Design completed, ready for review." }
        ]
      },
      {
        id: 3,
        name: "Dashboard",
        description: "Create the main dashboard interface",
        starts: "30-03-25",
        due: "20-04-25",
        role: "Frontend",
        assignee: "Pranjal",
        hours: "96 h",
        status: "In testing",
        comments: []
      },
      {
        id: 4,
        name: "JIRA Tickets",
        description: "Create JIRA tickets for sprint planning",
        starts: "10-02-25",
        due: "15-02-25",
        role: "Lead",
        assignee: "Tejas",
        hours: "32 h",
        status: "In progress",
        comments: [
          { author: "Tejas", date: "12-02-25", text: "Working on creating all tickets, 60% done." }
        ]
      }
    ];
  }
  
  setActiveTab(tab: string): void {
    this.activeTab = tab;
  }
  
  showAddTaskForm(): void {
    this.isAddTaskVisible = true;
    this.resetNewTask();
  }
  
  hideAddTaskForm(): void {
    this.isAddTaskVisible = false;
  }
  
  onOverlayClick(event: MouseEvent): void {
    if ((event.target as HTMLElement).className === 'overlay') {
      this.hideAddTaskForm();
    }
  }
  
  resetNewTask(): void {
    this.newTask = {
      name: '',
      description: '',
      startDate: '',
      dueDate: '',
      role: '',
      assignee: ''
    };
  }
  
  addNewTask(): void {
    if (!this.newTask.name || !this.newTask.startDate || !this.newTask.dueDate || !this.newTask.role || !this.newTask.assignee) {
      // In a real application, you would add validation and error messages
      return;
    }
    
    // Format dates from YYYY-MM-DD to DD-MM-YY
    const startParts = this.newTask.startDate!.split('-');
    const dueParts = this.newTask.dueDate!.split('-');
    
    const startFormatted = `${startParts[2]}-${startParts[1]}-${startParts[0].substring(2)}`;
    const dueFormatted = `${dueParts[2]}-${dueParts[1]}-${dueParts[0].substring(2)}`;
    
    // Calculate hours based on date difference
    const start = new Date(this.newTask.startDate!);
    const end = new Date(this.newTask.dueDate!);
    const diffTime = Math.abs(end.getTime() - start.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    const hours = `${diffDays * 8} h`; // 8 hours per day
    
    // Create new task
    const newId = this.tasks.length > 0 ? Math.max(...this.tasks.map(t => t.id)) + 1 : 1;
    
    const task: Task = {
      id: newId,
      name: this.newTask.name,
      description: this.newTask.description || '',
      starts: startFormatted,
      due: dueFormatted,
      role: this.newTask.role,
      assignee: this.newTask.assignee,
      hours: hours,
      status: "In progress", // Default status for new tasks
      comments: []
    };
    
    this.tasks.push(task);
    this.hideAddTaskForm();
  }
  
  editTask(taskId: number): void {
    // Implementation can be added if needed
    console.log("Edit task with ID:", taskId);
  }
  
  openCommentModal(taskId: number): void {
    const task = this.tasks.find(t => t.id === taskId);
    if (task) {
      this.currentTaskId = taskId;
      this.currentTaskName = task.name;
      this.currentTaskComments = [...task.comments];
      this.newComment = '';
      this.isCommentModalVisible = true;
    }
  }
  
  hideCommentModal(): void {
    this.isCommentModalVisible = false;
  }
  
  addComment(): void {
    if (!this.newComment.trim() || this.currentTaskId === null) {
      return;
    }
    
    const task = this.tasks.find(t => t.id === this.currentTaskId);
    if (task) {
      // Get current date in DD-MM-YY format
      const today = new Date();
      const dd = String(today.getDate()).padStart(2, '0');
      const mm = String(today.getMonth() + 1).padStart(2, '0');
      const yy = String(today.getFullYear()).substring(2);
      const formattedDate = `${dd}-${mm}-${yy}`;
      
      // Add new comment
      const comment: Comment = {
        author: 'Sagar', // Current user
        date: formattedDate,
        text: this.newComment.trim()
      };
      
      task.comments.push(comment);
      this.currentTaskComments.push(comment);
      this.newComment = '';
    }
  }
}