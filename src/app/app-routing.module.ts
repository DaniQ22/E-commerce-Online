import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component-view-admin/components/product/product.component';
import { FormProductComponent } from './component-view-admin/components/form-product/form-product.component';
import { LoginSignupComponent } from './components-general/Login-form/Login-Signup.component';
import { ComponentViewAdminComponent } from './component-view-admin/component-view-admin.component';
import { DashboardComponent } from './component-view-admin/components/dashboard/dashboard.component';
import { loginGuards } from './guards/login.guards';
import { SignupFormComponent } from './components-general/signup-form/signup-form/signup-form.component';

const routes: Routes = [
  {
    path: 'signup-admin', 
    component: SignupFormComponent

  },
  {
    path: "admin-dash", component: ComponentViewAdminComponent,
    canActivate: [
      loginGuards
    ],
    children: [
      {
        path: 'products',
        component: ProductComponent
      },
      {
        path: '',
        component: DashboardComponent
      }
    ]
  },
  { path: "form-product-admin", component: FormProductComponent },
  {
    path: "login-admin",
    component: LoginSignupComponent,
  
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
