import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  productitem=['Gift Set', 'Travel Sleeve', 'Filter', 'Accessories']

  

  constructor(private auth : AuthService, private router : Router) { }

  ngOnInit(): void {
  }

  out()
  {
    this.auth.logout()
    this.router.navigate(['/signin'])
  }

  cart(){
    if(this.auth.loggedIn()){
      this.router.navigate(['/cart'])
    }
    else{
      this.router.navigate(['/signin'])
    }
  }

  check()
  {
    if(this.auth.loggedIn())
    {
      return true;
    }
    else{
      return false;
    }
  }






}
