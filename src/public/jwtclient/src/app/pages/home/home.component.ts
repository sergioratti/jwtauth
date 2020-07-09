import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title:string = 'JWTClient';
  users:any[] = [];

  constructor(private auth:AuthService,private data:DataService) { }

  ngOnInit() {
  }

  logout(){
    this.auth.logout();
  }

  getUsers(){
    this.data.getUsers()
    .subscribe(results=>{
      if(results['users'])
        this.users = <any[]>results['users'];
    });
  }

}
