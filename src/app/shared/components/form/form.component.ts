import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {Phone} from "../../models/Phone";



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

 @Output() add:EventEmitter<Phone> = new EventEmitter<Phone>();
   phoneForm: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder) {
  }

  ngOnInit(): void {

    this.phoneForm = new FormGroup({
      brand: new FormControl('',[
        Validators.required
      ]),
      model: new FormControl('',[
        Validators.required
      ]),
      color: new FormControl('',[
        Validators.maxLength(10)
      ]),
      price: new FormControl('',[
        Validators.required
      ]),

    })

  }

 addEmitter(){
    this.add.emit(this.phoneForm.value);
    this.phoneForm.reset();
 }

}
