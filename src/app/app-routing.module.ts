import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './component-view-admin/components/product/product.component';
import { FormProductComponent } from './component-view-admin/components/form-product/form-product.component';

const routes: Routes = [
  { path: "product-admin", component: ProductComponent },
  { path: "product-admin", component: ProductComponent },
  { path: "form-product-admin", component: FormProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
