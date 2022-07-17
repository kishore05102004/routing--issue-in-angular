import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {

  spl:any = []
  constructor(private sevent : EventService, private route : Router) { }

  ngOnInit(): void {

    this.sevent.product3()
    .subscribe(res => this.spl = res),
      (Error: any) =>{
      if(Error instanceof HttpErrorResponse){
        if(Error.status == 401)
        {
          this.route.navigate(['/login'])
        }
      }
    }

    
  }

}
