import { Component } from '@angular/core';
import { AccessService } from '../../_services/access.service';

@Component({
  selector: 'app-board-moderator',
  standalone: true,
  imports: [],
  templateUrl: './board-moderator.component.html',
  styleUrl: './board-moderator.component.scss',
})
export class BoardModeratorComponent {
  content?: string;

  constructor(private accessService: AccessService) {}

  ngOnInit(): void {
    this.accessService.getModeratorBoard().subscribe({
      next: (data) => {
        this.content = data;
      },
      error: (err) => {
        console.log('error', err);
      },
    });
  }
}
