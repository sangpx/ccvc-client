import { Component } from '@angular/core';
import { AccessService } from '../../_services/access.service';

@Component({
  selector: 'app-board-user',
  standalone: true,
  imports: [],
  templateUrl: './board-user.component.html',
  styleUrl: './board-user.component.scss'
})
export class BoardUserComponent {

  content?: string;

  constructor(private accessService: AccessService) { }
  
  ngOnInit(): void {
     this.accessService.getUserBoard().subscribe({
       next: (data) => {
         this.content = data;
       },
       error: (err) => {
         console.log('error', err);
       },
     });
    
  }

}
