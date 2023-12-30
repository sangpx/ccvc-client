import { routes } from './../../app.routes';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../_services/user.service';
import { CommonModule } from '@angular/common';
import { LoginDto } from '../../dtos/user/login.dto';
import { LoginResponse } from '../../responses/user/login.response';
import { TokenService } from '../../_services/token.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  @ViewChild('loginForm') loginForm!: NgForm;
  //Khai bao cac bien tuong ung voi cac truong du lieu trong form
  username: string;
  password: string;
  roles: string[] = [];
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';

  constructor(
    private userService: UserService,
    private tokenService: TokenService,
    private router: Router
  ) {
    this.username = '';
    this.password = '';

    //inject
  }

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenService.getUser().roles;
    }
  }

  login() {
    const loginDTO: LoginDto = {
      username: this.username,
      password: this.password,
    };

    this.userService.login(loginDTO).subscribe({
      next: (response: LoginResponse) => {
        //muon su dung token trong cac yeu cau API - gan vao cac Header
        // debugger;
        this.tokenService.saveToken(response.accessToken);
        this.tokenService.saveUser(response);
        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenService.getUser().roles;
        this.reloadPage();
        // this.router.navigate(['/admin']); 
      },
      complete: () => {
        // debugger
        console.log('complete!');
      },
      error: (error: any) => {
        // debugger
        console.log(`Cannot login, error: ${error.error}`);
      },
    });
  }

  reloadPage(): void {
    window.location.reload();
  }
}
