
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/Admin/home/home.component';
import { AddCategoryComponent } from './Components/category/add-category/add-category.component';
import { CategoryComponent } from './Components/category/category.component';
import { EditCategoryComponent } from './Components/category/edit-category/edit-category.component';
import { LayoutComponent } from './Components/layout/layout.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrderHistoryComponent } from './Components/orders/order-history/order-history.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { ViewOrderComponent } from './Components/orders/view-order/view-order.component';
import { UsersComponent } from './Components/users/users.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,
  children:[
  {path:'',redirectTo:'/home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'categories', component:CategoryComponent},
  {path:'add-category',component:AddCategoryComponent},
  {path:'edit-category/:cid',component:EditCategoryComponent},
  {path:'orders', component:OrdersComponent},
  {path:'orders/:oid',component:ViewOrderComponent},
  {path:'order-history',component:OrderHistoryComponent},
  {path:'usersAdmin' , component:UsersComponent},
  ]
  },
  {path:'**', component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
