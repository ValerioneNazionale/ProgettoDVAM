import { Component, OnInit } from '@angular/core';
import {Phone} from "../../shared/models/Phone";

 const listaPhone:Phone[]=[
   {id:1,brand:'Samsung',model:'S4',color:'Pink',price:100}
 ]


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

   listaTelefoni=listaPhone;



  constructor() { }

  ngOnInit(): void {
  }


  add(obj:Phone){
    const newPhone= obj
    this.listaTelefoni.push(newPhone);
    console.log(this.listaTelefoni)


}
}
