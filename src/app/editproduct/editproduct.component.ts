import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Product } from '../Product';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-editproduct',
  templateUrl: './editproduct.component.html',
  styleUrls: ['./editproduct.component.css']
})
export class EditproductComponent  implements OnInit{
  p:Product;
  id:string|null;
  registerForm:FormGroup;
  submitted:boolean=false;
  constructor(private service:DataService,private activatedroute:ActivatedRoute, private builder:FormBuilder,private router:Router) { }


  ngOnInit(): void {

    this.id=this.activatedroute.snapshot.paramMap.get('id');
    this.service.getProductById(Number(this.id)).subscribe(x=>this.p=x);

    this.registerForm=this.builder.group({
      name:['',Validators.required],
      email:['',Validators.required,Validators.email],
      country:['',Validators.required],
      login:['',Validators.required],
      password:['',Validators.required],

    });
  }

  get form(){
    return this.registerForm.controls;
  }

  onSubmit(){
    this.submitted=true;
    if(this.registerForm.invalid)
      return;
    else
      {
        this.service.editProduct(this.p,Number(this.id)).subscribe(x=>console.log(x));
        alert("Data Updated Successfully");
        this.router.navigate(['list'])
      }
  }
}
