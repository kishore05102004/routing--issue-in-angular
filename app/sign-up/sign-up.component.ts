import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'signup',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  RUserData={email:'',password:''}
  constructor(private auth : AuthService, private route : Router) { }

  ngOnInit(): void {
  }
  RUser()
  {
    this.auth.register(this.RUserData)
    .subscribe(res =>{
      console.log(res)
      localStorage.setItem('token',res.token)
      this.route.navigate(['/home']) 
    }
    )}

}
