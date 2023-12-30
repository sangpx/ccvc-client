import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EmployeeService } from '../../../_services/employee.service';
import { EmployeeDto } from '../../../dtos/employee/employee.dto';

@Component({
  selector: 'app-list-employee',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-employee.component.html',
  styleUrl: './list-employee.component.scss',
})
export class ListEmployeeComponent implements OnInit {
  employeesDto?: EmployeeDto[];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getEmployees();
  }

  private getEmployees() {
    try {
      this.employeeService.getEmployeesList().subscribe((data) => {
        this.employeesDto = data;
      });
    } catch (error) {
      console.log(error);
    }
  }

  clickAddEmployee() {
    this.router.navigate(['/addEmployee']);
  }

  clickUpdateEmployee(id: any) {
    this.router.navigate(['/updateEmployee', id]);
  }

  clickDeleteEmployee(id: any) {
     try {
       this.employeeService.deleteEmployee(id).subscribe((data) => {
         console.log('data deleted: ', data);
         this.getEmployees();
       });
     } catch (error) {
       console.log(error);
     }
  }
  clickDetailEmployee(id: any) {
    this.router.navigate(['/detailEmployee', id]);
  }
}
