import { Component, OnInit } from '@angular/core';
import * as sha512 from 'js-sha512';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email:string = '';
  password:string = '';

  constructor(private auth:AuthService) { }

  ngOnInit(): void {
  
  }

  login() {
    let hashpassword = sha512.sha512(this.password);
    this.auth.login(this.email,hashpassword);
  }



}
