import {Component, Input, OnInit} from '@angular/core';
import {Phone} from "../../models/Phone";

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  @Input() listaInput:Phone[]=[];


  constructor() { }

  ngOnInit(): void {
  }

}
