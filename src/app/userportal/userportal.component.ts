import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-userportal',
  templateUrl: './userportal.component.html',
  styleUrls: ['./userportal.component.css']
})
export class UserportalComponent {
  constructor(private router: Router) { }

  btnClick(){
    this.router.navigate(['./userdashboard'])
  }
}
