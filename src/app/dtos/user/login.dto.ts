import { IsString, IsNotEmpty, IsEmail } from 'class-validator';


export class LoginDto {
     @IsString()
     username: string;

     @IsString()
     password: string;

     constructor(data: any) {
          this.username = data.username;
          this.password = data.password;
     }
}