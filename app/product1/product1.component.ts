import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { EventService } from '../event.service';
import { Router } from '@angular/router';

@Component({
  selector: 'product1',
  templateUrl: './product1.component.html',
  styleUrls: ['./product1.component.css']
})
export class Product1Component implements OnInit {

  spl:any = []
  constructor(private sevent : EventService, private route : Router) { }

  ngOnInit(): void {

    this.sevent.product1()
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
