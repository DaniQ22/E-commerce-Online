import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { product } from './models/model.product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ListProduct: any[] = [];

  ngOnInit(): void {
    this.getAll();
    
  }

  constructor(private service: ProductService){}

  getAll(){
    this.service.getAll().subscribe(res=>{
      if(res){
        this.ListProduct = res;
        console.log("Lista de prodcutos", this.ListProduct);
      }
    });
  }

  

}
