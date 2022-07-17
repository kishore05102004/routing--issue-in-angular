import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './hcontainer.component.html',
  styleUrls: ['./hcontainer.component.css']
})
export class HcontainerComponent implements OnInit {
  b1:string='/assets/b111.png';
  b2:string='/assets/b22.png';
  b3:string='/assets/b3.webp';

  b4:string='/assets/b22.png';
  b5:string='/assets/b3.webp';
  img1: string[]=[this.b4,this.b5];

  t1:string='Monaco Blue';
  t2:string='Obsidian Black';
  t3:string='Pure White';

  img: string[]= [this.b1, this.b2, this.b3]

  pname=[{id:1, title:this.t1},
        
        {id:2, title:this.t2},

        {id:3, title:this.t3},
      ];
      



  constructor() { }

  ngOnInit(): void {
  }

}
