import { Component, OnInit } from '@angular/core';
import { DepartmentService } from '../../../_services/department.service';
import { DepartmentDto } from '../../../dtos/department/department.dto';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-list-department',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-department.component.html',
  styleUrl: './list-department.component.scss',
})
export class ListDepartmentComponent implements OnInit {
  departmentsDto?: DepartmentDto[];

  constructor(
    private departmentService: DepartmentService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getDepartments();
  }

  private getDepartments() {
    try {
      this.departmentService.getDepartmentsList().subscribe((data) => {
        this.departmentsDto = data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  clickAddDepartment() {
    this.router.navigate(['/addDepartment']);
  }

  clickUpdateDepartment(id: any) {
    this.router.navigate(['/updateDepartment', id]);
  }

  clickDeleteDepartment(id: any) {
    try {
      this.departmentService.deleteDepartment(id).subscribe((data) => {
        console.log('data deleted: ', data);
        this.getDepartments();
      });
    } catch (error) {
      console.log(error);
    }
  }

  clickDetailDepartment(id: any) {
    this.router.navigate(['/detailDepartment', id]);
  }
}
