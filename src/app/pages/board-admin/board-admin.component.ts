import { Component } from '@angular/core';
import { AccessService } from '../../_services/access.service';
import { ListDepartmentComponent } from '../department/list-department/list-department.component';
import { Router, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { AddDepartmentComponent } from '../department/add-department/add-department.component';
import { ListEmployeeComponent } from '../employee/list-employee/list-employee.component';
import { AddEmployeeComponent } from '../employee/add-employee/add-employee.component';

@Component({
  selector: 'app-board-admin',
  standalone: true,
  imports: [
    ListDepartmentComponent,
    ListEmployeeComponent,
    AddEmployeeComponent,
    AddDepartmentComponent,
    RouterLink,
    RouterLinkActive,
    RouterOutlet,
  ],
  templateUrl: './board-admin.component.html',
  styleUrl: './board-admin.component.scss',
})
export class BoardAdminComponent {
  content?: string;

  constructor(private router: Router, private accessService: AccessService) {}

  ngOnInit(): void {
    this.accessService.getAdminBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }

  clickDepartmentPage() {
    this.router.navigate(['/listDepartment']);
  }
  clickEmployeePage() {
    this.router.navigate(['/listEmployee']);
  }
}
