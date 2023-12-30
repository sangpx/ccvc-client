import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { RegisterComponent } from './pages/register/register.component';
import { BoardAdminComponent } from './pages/board-admin/board-admin.component';
import { BoardModeratorComponent } from './pages/board-moderator/board-moderator.component';
import { BoardUserComponent } from './pages/board-user/board-user.component';
import { BoardProfileComponent } from './pages/board-profile/board-profile.component';
import { ListDepartmentComponent } from './pages/department/list-department/list-department.component';
import { AddDepartmentComponent } from './pages/department/add-department/add-department.component';
import { UpdateDepartmentComponent } from './pages/department/update-department/update-department.component';
import { DetailDepartmentComponent } from './pages/department/detail-department/detail-department.component';
import { ListEmployeeComponent } from './pages/employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from './pages/employee/add-employee/add-employee.component';
import { UpdateEmployeeComponent } from './pages/employee/update-employee/update-employee.component';
import { DetailEmployeeComponent } from './pages/employee/detail-employee/detail-employee.component';

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
  {
    path: 'listDepartment',
    component: ListDepartmentComponent,
  },
  {
    path: 'addDepartment',
    component: AddDepartmentComponent,
  },
  {
    path: 'updateDepartment/:id',
    component: UpdateDepartmentComponent,
  },
  {
    path: 'detailDepartment/:id',
    component: DetailDepartmentComponent,
  },
  {
    path: 'listEmployee',
    component: ListEmployeeComponent,
  },
  {
    path: 'addEmployee',
    component: AddEmployeeComponent,
  },
  {
    path: 'updateEmployee/:id',
    component: UpdateEmployeeComponent,
  },
  {
    path: 'detailEmployee/:id',
    component: DetailEmployeeComponent,
  },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];
