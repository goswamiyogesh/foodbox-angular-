import { Component, OnInit } from '@angular/core';
import { User } from '../User';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registeruser',
  templateUrl: './registeruser.component.html',
  styleUrls: ['./registeruser.component.css']
})
export class RegisteruserComponent  implements OnInit{
  constructor(public service:DataService, private router: Router){}
  user:User=new User();
  name:any;
  username:any;
  password:any;
  email:any;
  message:any; 
  ngOnInit(): void {
  
  }
  addUser(){
    let response=this.service.addUser(this.user);
    response.subscribe((data:any)=>this.user=data);
   
    if(this.user!==null){
      this.message="Welcome to My Food Box";
    }
    else{
      this.message="Check";
    }
    
  }


}
