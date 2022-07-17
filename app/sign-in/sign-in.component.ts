import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SigninComponent implements OnInit {

  loginUserData={email:'', password:''}
  constructor( private auth : AuthService, private router: Router ) { }

  ngOnInit(): void {
  }

  loginUser()
  {
    this.auth.Login(this.loginUserData)
    .subscribe(res=>{
      console.log(res)
      localStorage.setItem('token',res.token)
      this.router.navigate(['/home']);
    })
  }

}

