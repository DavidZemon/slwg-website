import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'slwg-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  isNavbarCollapsed = true;

  ngOnInit() {
  }
}
