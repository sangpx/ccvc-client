import { DepartmentService } from './../../../_services/department.service';
import { Component, OnInit } from '@angular/core';
import { DepartmentDto } from '../../../dtos/department/department.dto';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-department.component.html',
  styleUrl: './add-department.component.scss',
})
export class AddDepartmentComponent {
  department: DepartmentDto = new DepartmentDto();

  constructor(private router: Router,private departmentService: DepartmentService) {}

  saveDepartment() {
    try {
      this.departmentService
        .createDepartment(this.department)
        .subscribe((data) => {
          console.log('data tra: ', data);
          this.router.navigate(['/listDepartment']);
        });
    } catch (error) {
      console.log(error);
    }
    
  }

  onSubmit() {
    console.log('du lieu nhap: ', this.department);
    this.saveDepartment();
  }
}
