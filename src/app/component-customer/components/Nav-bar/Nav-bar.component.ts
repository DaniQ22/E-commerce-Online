import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-Nav-bar',
  templateUrl: './Nav-bar.component.html',
  styleUrls: ['./Nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  isMobileMenuOpen: boolean = false;

  // Función para alternar la visibilidad del menú móvil.
  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

  constructor() { }

  ngOnInit() {
  }

}
