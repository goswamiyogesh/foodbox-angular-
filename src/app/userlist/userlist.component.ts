import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit{
  email:any;
  users:any;
  constructor(private service:DataService) { }


public getALLUserByEmail(){
  let response=this.service.getUserByEmail(this.email);
  response.subscribe((data:any)=>this.users=data);
}


  ngOnInit(): void {
    let response=this.service.getAllUser();
    response.subscribe((data:any)=>this.users=data);
  }

}
