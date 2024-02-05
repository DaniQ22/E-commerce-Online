import { Component, EventEmitter, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { navBarData } from './nav-bar-model';
import { faAdd, faBars, faBoxesPacking, faBurger, faClose, faEllipsisV, faMoon, faUsers } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-NavBarAdmin',
  templateUrl: './NavBarAdmin.component.html',
  styleUrls: ['./NavBarAdmin.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class NavBarAdminComponent implements OnInit {

  @Output() isNavBarMinimizadeEmitter = new EventEmitter<boolean>();
  
  fasBars = faBars;
  faPlus = faAdd;
  faInventory = faBurger;
  faCustomers = faUsers;
  faCategory = faBoxesPacking;
  faMoon = faMoon;
  faElipsis = faEllipsisV;
  faClose = faClose;



  isSidebarMinimized: boolean = false;
  isOcultedSpan: boolean = false;
  isDarkModeAactive: boolean = false;
  showSidebar: boolean = false;
  iconClose: boolean = false;
  navegation = navBarData;



  constructor() { }

  ngOnInit() {
  }

  toggleSidebar() {
    this.isSidebarMinimized = !this.isSidebarMinimized;
    this.isOcultedSpan = this.isSidebarMinimized;
    this.isNavBarMinimizadeEmitter.emit(this.isSidebarMinimized);
  }

  toggleDarkMode() {
    this.isDarkModeAactive = !this.isDarkModeAactive;
  }

  toggleMenu() {
    this.showSidebar = !this.showSidebar;
    this.iconClose = !this.iconClose;

  }

}
