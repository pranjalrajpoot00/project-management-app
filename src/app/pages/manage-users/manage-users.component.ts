import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

interface User {
    name: string;
    role: string;
}

@Component({
    selector: 'app-manage-users',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './manage-users.component.html',
    styleUrl: './manage-users.component.css'
})
export class ManageUsersComponent {
    users: User[] = [
        { name: 'Sagar', role: 'PM' },
        { name: 'Drishya', role: 'Lead' },
        { name: 'Tejas', role: 'Lead' },
        { name: 'Muskan', role: 'PM' },
        { name: 'Pranjal', role: 'Developer' },
        { name: 'Kritika', role: 'Developer' },
        { name: 'Ninaad', role: 'Developer' }
    ];

    constructor(private router: Router) {}

    navigateTo(page: string) {
        console.log(`Navigating to ${page} page...`);
        // In a real application, you would navigate to the appropriate page
        // this.router.navigate([`/${page}`]);
    }

    switchTab(tab: string) {
        console.log(`${tab}`)
        this.router.navigate([`/${tab}`]);
        // In a real application, you would handle tab switching logic
    }

    editUser(user: User) {
        console.log('Edit user:', user.name);
        // In a real application, you would open an edit modal or navigate to edit page
    }

    deleteUser(user: User) {
        if (confirm(`Are you sure you want to delete user: ${user.name}?`)) {
            console.log('Deleting user:', user.name);
            // In a real application, you would handle the deletion logic
            this.users = this.users.filter(u => u.name !== user.name);
        }
    }

    logout() {
        console.log('Logging out...');
        // In a real application, you would handle the logout process
        this.router.navigate(['/login']);
    }
}
