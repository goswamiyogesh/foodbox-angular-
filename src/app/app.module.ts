import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { DataService } from './data.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import { UserdashboardComponent } from './userdashboard/userdashboard.component';
import { HomeComponent } from './home/home.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UseraddtocartComponent } from './useraddtocart/useraddtocart.component';
import { UsercheckoutComponent } from './usercheckout/usercheckout.component';

import { UserportalComponent } from './userportal/userportal.component';

const routes:Routes=
[
];
@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    AdminloginComponent,
    RegisteruserComponent,
    UserlistComponent,
    EditproductComponent,
    ProductlistComponent,
    AddproductComponent,
    ProductdetailsComponent,
    AdmindashboardComponent,
    UserdashboardComponent,
    HomeComponent,
    UsercartComponent,
    UseraddtocartComponent,
    UsercheckoutComponent,
   
    UserportalComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
