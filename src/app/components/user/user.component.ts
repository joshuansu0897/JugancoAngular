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
  address:Address;
  hobbies:string[];s
  
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
    };
    this.email='joshuansu0897@gmail.com';
    this.hobbies=['Music','Video Games','Write Code','Sleep','Eat','School'];
  }

  onClick(){
    if(this.name=="Joshua"){
     this.name="Eminem";
    }else{
      this.name="Joshua"
    }
  }

  addHobby(hobby:string){
    this.hobbies.push(hobby)

    //esto es para que no recarge la pagina y no pierda el dato introducido
    return false;
  }

  deleteHobby(index:number){
    this.hobbies.splice(index,1)

    //esto es para que no recarge la pagina y no pierda el dato introducido
    //return false;
  }

}

interface Address{
  street:string,
  state:string,
  city:string
}
