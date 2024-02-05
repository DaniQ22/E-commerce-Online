import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentCustomerComponent } from './component-customer/component-customer.component';
import { ProductComponent } from './component-view-admin/components/product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarAdminComponent } from './component-view-admin/components/NavBarAdmin/NavBarAdmin.component';
import { ComponentViewAdminComponent } from './component-view-admin/component-view-admin.component';
import { FormProductComponent } from './component-view-admin/components/form-product/form-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    AppComponent,
    ComponentCustomerComponent,
    ProductComponent,
    NavBarAdminComponent,
    ComponentViewAdminComponent, 
    FormProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule, 
    ReactiveFormsModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
