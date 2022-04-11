import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/Admin/header/header.component';
import { FooterComponent } from './Components/Admin/footer/footer.component';
import { SidebarComponent } from './Components/Admin/sidebar/sidebar.component';
import { HomeComponent } from './Components/Admin/home/home.component';
import { CategoryComponent } from './Components/category/category.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { OrdersComponent } from './Components/orders/orders.component';
import { FormsModule } from '@angular/forms';
import { LayoutComponent } from './Components/layout/layout.component';
import { AddCategoryComponent } from './Components/category/add-category/add-category.component';
import { EditCategoryComponent } from './Components/category/edit-category/edit-category.component';
import { ViewOrderComponent } from './Components/orders/view-order/view-order.component';
import { OrderHistoryComponent } from './Components/orders/order-history/order-history.component';
import { AllProductsComponent } from './Components/products/all-products/all-products.component';
import { AddProductComponent } from './Components/products/add-product/add-product.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    HomeComponent,
    CategoryComponent,
    NotFoundComponent,
    OrdersComponent,
    LayoutComponent,
    AddCategoryComponent,
    EditCategoryComponent,
    ViewOrderComponent,
    OrderHistoryComponent,
    AllProductsComponent,
    AddProductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
