import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from '../Admin';
import { DataService } from '../data.service';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  admin:Admin = new Admin();
  message:any;
  username:any;
  password:any;
  constructor(private service:DataService,public router:Router) {}

 public loginNow(){
    if(!this.username){
      alert('Please provide username');
      return;
    }
    if(!this.password){
      alert('Please provide password');
      return;
    }
    
    let response=this.service.adminLogin(this.username);
    response.subscribe((data:any)=>this.admin=data);
    
    if(this.admin.password==this.password){
      this.router.navigate(['./admindashboard']);
    }
    else{
      this.message="Wrong username or password";
    }
  }

 
 
} 
