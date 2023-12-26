import { IsString, IsNotEmpty, IsEmail } from 'class-validator';


export class RegisterDto {
     @IsString()
     username: string;

     @IsEmail()
     email: string;

     @IsString()
     password: string;

     constructor(data: any) {
          this.username = data.username;
          this.email = data.email;
          this.password = data.password;
     }
}