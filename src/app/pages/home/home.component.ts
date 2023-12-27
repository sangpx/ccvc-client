import { Component } from '@angular/core';
import { AccessService } from '../../_services/access.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  content?: string;

  constructor(private accessService: AccessService) {}

  ngOnInit(): void {
    this.accessService.getPublicContent().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
       console.log('error', err);
       
      },
    });
  }
}
