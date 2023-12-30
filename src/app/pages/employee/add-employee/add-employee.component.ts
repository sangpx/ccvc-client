import { DepartmentService } from './../../../_services/department.service';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeDto } from '../../../dtos/employee/employee.dto';
import { EmployeeService } from '../../../_services/employee.service';
import { DepartmentDto } from '../../../dtos/department/department.dto';

@Component({
  selector: 'app-add-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './add-employee.component.html',
  styleUrl: './add-employee.component.scss',
})
export class AddEmployeeComponent implements OnInit {
  employeeDto: EmployeeDto = new EmployeeDto();
  departmentDto: DepartmentDto = new DepartmentDto();
  // selectedDepartment: departments | undefined;

  constructor(
    private router: Router,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService
  ) {}
  ngOnInit(): void {
    // this.departmentService.getDepartmentsList().subscribe((datas) => {
    //   datas = this.departmentDto;
    // })
  }

  saveEmployee() {
    try {
      this.employeeService
        .createEmployee(this.employeeDto)
        .subscribe((data) => {
          console.log('data tra: ', data);
          this.router.navigate(['/listDepartment']);
        });
    } catch (error) {
      console.log(error);
    }
  }

  onSubmit() {
    console.log('du lieu nhap: ', this.employeeDto);
    this.saveEmployee();
  }
}
