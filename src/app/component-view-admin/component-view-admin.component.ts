import { Component, Input, OnInit } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-component-view-admin',
  templateUrl: './component-view-admin.component.html',
  styleUrls: ['./component-view-admin.component.css']
})
export class ComponentViewAdminComponent implements OnInit {
  @Input() isMimizeSidebar!: boolean;

  ListProduct: any[] = [];;

  constructor(private servie: ProductService){}

  ngOnInit(): void {
    this.getAll();
  }

  
  getAll() {
    this.servie.getAll().subscribe(res => {
      if(res){
        this.ListProduct = res;
      }
    });
  }

  toogleSideBar(event: boolean){
    this.isMimizeSidebar = event;
    console.log(this.isMimizeSidebar);
  }


}
