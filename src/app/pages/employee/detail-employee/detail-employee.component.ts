import { EmployeeService } from './../../../_services/employee.service';
import { ActivatedRoute } from '@angular/router';
import { EmployeeDto } from './../../../dtos/employee/employee.dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-employee',
  standalone: true,
  imports: [],
  templateUrl: './detail-employee.component.html',
  styleUrl: './detail-employee.component.scss',
})
export class DetailEmployeeComponent implements OnInit {
  id?: any;
  employeeDto?: EmployeeDto;
  constructor(
    private router: ActivatedRoute,
    private employeeService: EmployeeService
  ) {}
  ngOnInit(): void {
    try {
      this.id = this.router.snapshot.params['id'];
      this.employeeDto = new EmployeeDto();
      this.employeeService.getEmployeesById(this.id).subscribe((data) => {
        this.employeeDto = data;
      });
    } catch (error) {
      console.log(error);
    }
  }
}
