import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  help:string[]=['Frequently Aked Question', 'Review', 'My Account', 'Corporate Gifting','Contact Us'];

  productitem=['Gift Set', 'Travel Sleeve', 'Filter', 'Accessories'];

  about:string[]=['Baseq Magazine','Press','Our Story','Technology'];
  constructor() { }

  ngOnInit(): void {
  }

}
