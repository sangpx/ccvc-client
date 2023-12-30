import { EmployeeService } from './../../../_services/employee.service';
import { Component } from '@angular/core';
import { EmployeeDto } from '../../../dtos/employee/employee.dto';
import { ActivatedRoute } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DepartmentDto } from '../../../dtos/department/department.dto';
import { DepartmentService } from '../../../_services/department.service';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.scss',
})
export class UpdateEmployeeComponent {
  id: any;
  employeeDto: EmployeeDto = new EmployeeDto();
  departmentDto: DepartmentDto = new DepartmentDto();

  constructor(
    private router: ActivatedRoute,
    private employeeService: EmployeeService,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    try {
      this.id = this.router.snapshot.params['id'];
      this.employeeService.getEmployeesById(this.id).subscribe((data) => {
        this.employeeDto = data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  onSubmit() {
    try {
      this.employeeService
        .updateEmployee(this.employeeDto)
        .subscribe((data) => {
          console.log('data tra: ', data);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
