import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-reactive-form-demo',
  templateUrl: './reactive-form-demo.component.html',
  styleUrls: ['./reactive-form-demo.component.css']
})
export class ReactiveFormDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  reactiveForm = new FormGroup( {
    Name:new FormControl(''),
    Mail:new FormControl('',[Validators.required]),
    Password:new FormControl('',[Validators.required,Validators.minLength(8)]),
    Password2:new FormControl('',[Validators.required,Validators.minLength(8)]),
  });

}
