import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular-form-ass1',
  templateUrl: './angular-form-ass1.component.html',
  styleUrls: ['./angular-form-ass1.component.css']
})
export class AngularFormAss1Component implements OnInit {
  show:string ;

  model:any;
  fname = "";
  password = "";
  password2 = "";

  constructor() { 
    this.show = "grp1";
    this.model ={};
  }

  ngOnInit(): void {
  }

  

  showGrp2(){
    this.show = "grp2";
    

  }
  showGrp1(){
    this.show = "grp1";
  }
  /*
  validateForm(regForm :any){
    console.log("submitted" +regForm);
    console.log(regForm)
  }*/
  save(s :any){
    console.log(s)
  }
  matchPasswords(){{}
    if(this.password !=this.password2){
      return true;
    }
    else{
      return false;
    }
  }

}

