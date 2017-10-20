import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  name:string = 'yoxua';
  age:number = 30;
  email:string;
  address:{
    street:string,
    state:string,
    city:string
  }
  
  constructor() {
    console.log('Constructor corriendo...')
   }

  ngOnInit() {
    console.log('ngOnInit corriendo...')
    this.name = 'Joshua';
    this.age=20;
    this.address={
      street:'8 mile',
      state:'Míchigan',
      city:'Detroit'
    }
    this.email='joshuansu0897@gmail.com'
  }

}
