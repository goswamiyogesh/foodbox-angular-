import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ProductlistComponent } from './productlist/productlist.component';
import { RegisteruserComponent } from './registeruser/registeruser.component';
import { UserlistComponent } from './userlist/userlist.component';
import { UserloginComponent } from './userlogin/userlogin.component';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';
import  { UserdashboardComponent } from './userdashboard/userdashboard.component'
import { HomeComponent } from './home/home.component';
import { UseraddtocartComponent } from './useraddtocart/useraddtocart.component';
import { UsercartComponent } from './usercart/usercart.component';
import { UsercheckoutComponent } from './usercheckout/usercheckout.component';
import { UserportalComponent } from './userportal/userportal.component';
const routes: Routes = [
 {path: 'home', component: HomeComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path:'adminlogin',component:AdminloginComponent},
{path:'admindashboard',component:AdmindashboardComponent},
{path:'userdashboard',component:UserdashboardComponent},
{path:'userlogin',component:UserloginComponent},
{path:'registeruser',component:RegisteruserComponent},
{path:'userlist',component:UserlistComponent},
{path:"addproduct",component:AddproductComponent},
{path:'editproduct',component:EditproductComponent},
{path:'productlist',component:ProductlistComponent},
{path:'useraddtocart',component:UseraddtocartComponent},
{path:'usercart',component:UsercartComponent},
{path:'usercheckout',component:UsercheckoutComponent},

{path:'userportal',component:UserportalComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
