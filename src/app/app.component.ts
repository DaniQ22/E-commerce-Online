import { Component, OnInit } from '@angular/core';
import { ProductService } from './service/product.service';
import { product } from './models/model.product';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private router: Router) {

  }

  showPanel: boolean = true;
  urlBase:string = 'admin' 

  ngOnInit(): void {
    //Aqui estoy declarando que mientras este en la ruta "localHost:4200/login.admin, no se mostrara el panel "
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (this.router.url.includes(this.urlBase)) {
          this.showPanel = false;
        } else {
          this.showPanel = true;
        }
      }
    });
  }


  showLoginAdmin() {
    this.showPanel = false;
  }




}
