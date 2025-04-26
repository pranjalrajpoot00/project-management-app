import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { ActivityMonitoringComponent } from './pages/activity-monitoring/activity-monitoring.component';
import { ManageUsersComponent } from './pages/pages/manage-users/manage-users.component';
import { DashboardComponent } from './pages/pages/dashboard/dashboard.component';
import { YourProjectsComponent } from './pages/pages/your-projects/your-projects.component';
import { SelectProjectComponent } from './pages/pages/select-project/select-project.component';
import { ProjectDetailsComponent } from './pages/pages/project-details/project-details.component';
import { CalendarComponent } from './pages/pages/calendar/calendar.component';
import { SelfHelpComponent } from './pages/pages/self-help/self-help.component';
import { CreateProjectComponent } from './pages/pages/create-project/create-project.component';
import { AddUserComponent } from './pages/add-user/add-user.component';
// import path from 'path';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { ResourcesComponent } from './pages/resources/resources.component';
import { AnalysisComponent } from './pages/pages/analysis/analysis.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'activity-monitoring', component: ActivityMonitoringComponent },
  { path: 'add-users', component: AddUserComponent },
  { path: 'manage-users', component: ManageUsersComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'your-projects', component: YourProjectsComponent },
  { path: 'select-project', component: SelectProjectComponent },
  { path: 'project-details', component: ProjectDetailsComponent },
  { path: 'calendar', component: CalendarComponent },
  { path: 'self-help', component: SelfHelpComponent },
  { path: 'create-project', component: CreateProjectComponent },
  { path: 'add-task', component: AddTaskComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'analysis', component: AnalysisComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' }
];
