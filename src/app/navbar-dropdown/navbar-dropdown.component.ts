import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'slwg-navbar-dropdown',
  templateUrl: './navbar-dropdown.component.html',
})
export class NavbarDropdownComponent implements OnInit {
  @Input() name: string;
  @Input() subs: Array<object>;

  ngOnInit() {
  }

}
