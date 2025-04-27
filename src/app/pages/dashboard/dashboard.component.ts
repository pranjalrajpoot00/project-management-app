import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { NavigationService, NavigationItem } from '../../services/navigation.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  navigationItems: NavigationItem[] = [];
  breadcrumbs: NavigationItem[] = [];
  currentUser: string = '';
  userRole: string = 'admin'; // This should come from your auth service

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit() {
    // Get current user from localStorage
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      this.currentUser = JSON.parse(currentUser).username;
      // In a real app, get role from auth service
      this.userRole = JSON.parse(currentUser).role || 'admin';
    }

    // Get role-based navigation items
    this.navigationItems = this.navigationService.getNavigationItemsByRole(this.userRole);

    // Subscribe to breadcrumbs
    this.navigationService.getBreadcrumbs().subscribe(breadcrumbs => {
      this.breadcrumbs = breadcrumbs;
    });
  }

  navigateTo(item: NavigationItem) {
    this.navigationService.setActiveItem(item.id);
    this.router.navigate([item.route]);
  }

  navigateToBreadcrumb(item: NavigationItem) {
    this.navigateTo(item);
  }

  logout() {
    if (confirm('Are you sure you want to log out?')) {
      localStorage.removeItem('currentUser');
      this.router.navigate(['/login']);
    }
  }
} 