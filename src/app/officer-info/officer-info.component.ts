import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'slwg-officer-info',
  templateUrl: './officer-info.component.html'
})
export class OfficerInfoComponent implements OnInit {
  @Input() title: string;
  @Input() name: string;
  @Input() face: string;
  @Input() phone: string;
  @Input() email: string;

  ngOnInit() {
  }

  prettyPhone() {
    return `(${this.phone.slice(0, 3)}) ${this.phone.slice(3, 6)}-${this.phone.slice(6)}`;
  }
}
