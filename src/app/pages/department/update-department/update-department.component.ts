import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DepartmentService } from '../../../_services/department.service';
import { DepartmentDto } from '../../../dtos/department/department.dto';

@Component({
  selector: 'app-update-department',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-department.component.html',
  styleUrl: './update-department.component.scss',
})
export class UpdateDepartmentComponent implements OnInit {
  id: any;
  department: DepartmentDto = new DepartmentDto();

  constructor(
    private router: ActivatedRoute,
    private departmentService: DepartmentService
  ) {}

  ngOnInit(): void {
    try {
      this.id = this.router.snapshot.params['id'];
      this.departmentService.getDepartmentsById(this.id).subscribe((data) => {
        this.department = data;        
      });
    } catch (error) {
      console.log(error);
    }
  }

  onSubmit() {
    try {
      this.departmentService
        .updateDepartment(this.department)
        .subscribe((data) => {
          console.log('data tra: ', data);
        });
    } catch (error) {
      console.log(error);
    }
  }
}
