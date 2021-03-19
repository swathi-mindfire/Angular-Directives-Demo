import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo',
  templateUrl: './binding-demo.component.html',
  styleUrls: ['./binding-demo.component.css']
})
export class BindingDemoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageTitle:string = "Data Binding In Angular";
  imgUrl:string = "assets/bg.png";
  btnStatus :boolean= true;

  name = "";


  changeBtnStatus(){
    /*
    if(this.btnStatus == false){
      this.btnStatus = true;

    }
    else{
      this.btnStatus = false

    }*/
    this.btnStatus = !this.btnStatus;


    

  }
}
