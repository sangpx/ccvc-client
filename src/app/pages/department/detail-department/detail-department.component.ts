import { ActivatedRoute } from '@angular/router';
import { DepartmentService } from './../../../_services/department.service';
import { Component, OnInit } from '@angular/core';
import { DepartmentDto } from '../../../dtos/department/department.dto';

@Component({
  selector: 'app-detail-department',
  standalone: true,
  imports: [],
  templateUrl: './detail-department.component.html',
  styleUrl: './detail-department.component.scss',
})
export class DetailDepartmentComponent implements OnInit {
  id?: any;
  departmentDto?: DepartmentDto;
  constructor(
    private router: ActivatedRoute,
    private departmentService: DepartmentService
  ) {}
  ngOnInit(): void {
    try {
      this.id = this.router.snapshot.params['id'];
      this.departmentDto = new DepartmentDto();
      this.departmentService.getDepartmentsById(this.id).subscribe((data) => {
        this.departmentDto = data;
      });
    } catch (error) {
      console.log(error);
    }
  }
}
