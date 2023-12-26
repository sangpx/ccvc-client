import { UserService } from './../../_services/user.service';
import { CommonModule } from '@angular/common';  
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { RegisterDto } from '../../dtos/registerDto';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  @ViewChild('registerForm') registerForm!: NgForm;

  //Khai bao cac bien tuong ung voi cac truong du lieu trong form
  username: string;
  email: string;
  password: string;

  constructor(private router: Router, private userService: UserService ) {
    this.username = '';
    this.email = '';
    this.password = '';

    //inject
  }

  onUserNameChange() {
    console.log('ok: ');
  }

  register() {
    const registerDTO : RegisterDto = {
      	"username": this.username,
        "email": this.email,
        "password": this.password,
    }


  this.userService.register(registerDTO)
    .subscribe(
      {
          next: (response: any) => {
          debugger
        console.log("Register Success!", response);
        this.router.navigate(['/login']);          
      },
      complete: () => {
        debugger
        console.log("complete!");
      },
        error: (error: any) => {  
        debugger
        console.log(`Cannot register, error: ${error.error}`)          
      }
        }
    );

  
        
  }
}
