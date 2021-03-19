import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-demo-second',
  templateUrl: './binding-demo-second.component.html',
  styleUrls: ['./binding-demo-second.component.css']
})
export class BindingDemoSecondComponent implements OnInit {
  favColor: string;
  favDish :string;
  flag:boolean = false;
  name:string;
  mail:string;
  mobile:Number;
  mflag:boolean;

  constructor() {
    this.favColor ="green";
    this.favDish = "Biriyani";
    setTimeout(()=> {this.flag = true},4000);
    this.name ="";
    this.mail="";
    this.mobile= 0;
    this.mflag = false;

   }

  ngOnInit(): void {
  }
  getFavDish(){
    return this.favDish;
  }
  updateName(event:any){
    console.log(event)
    this.name = event.target.value;

  }
  updateMobileFlag(){
    this.mflag=true;
  }

}
