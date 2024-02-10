import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentCustomerComponent } from './component-customer/component-customer.component';
import { ProductComponent } from './component-view-admin/components/product/product.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NavBarAdminComponent } from './component-view-admin/components/NavBarAdmin/NavBarAdmin.component';
import { ComponentViewAdminComponent } from './component-view-admin/component-view-admin.component';
import { FormProductComponent } from './component-view-admin/components/form-product/form-product.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginSignupComponent } from './components-general/Login-form/Login-Signup.component';
import { AuthInterceptor } from './helper/auth.interceptor';
import { DashboardComponent } from './component-view-admin/components/dashboard/dashboard.component';
import { SignupFormComponent } from './components-general/signup-form/signup-form/signup-form.component';




@NgModule({
  declarations: [
    AppComponent,
    ComponentCustomerComponent,
    ProductComponent,
    FormProductComponent,
    LoginSignupComponent,
    ComponentViewAdminComponent,
    NavBarAdminComponent,
    DashboardComponent,
    SignupFormComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FontAwesomeModule, 
    ReactiveFormsModule, 
    FormsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
