import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { BoardProfileComponent } from './pages/board-profile/board-profile.component';

export const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'admin',
    component: BoardAdminComponent,
  },
  {
    path: 'mod',
    component: BoardModeratorComponent,
  },
  {
    path: 'user',
    component: BoardUserComponent,
  },
  {
    path: 'profile',
    component: BoardProfileComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
