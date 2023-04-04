import { Component } from '@angular/core';
import { User } from '../User';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css']
})
export class UserloginComponent {
  user:User=new User();
  message:any;
  username:any;
  password:any;
  constructor(private service:DataService,public router:Router) {}
  
  loginUserNow(){
  
    if(!this.username){
      alert('Please provide username');
      return;
    }
    if(!this.password){
      alert('Please provide password');
      return;
    }
    let response=this.service.userLogin(this.username);
    response.subscribe((data:any)=>this.user=data);
    
    if(this.user.password==this.password){
  
      this.router.navigate(['./userdashboard']);
  
    }else{
  
      this.message="Wrong username or password";
    }
  }
}
