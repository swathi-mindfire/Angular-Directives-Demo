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
  countries :any[] ;
  selectedCountryCode1:any;
  states:any;
  selectedState1:any;
  selectedCountryCode2:any;
  num1 :number;
  num2 :number;
  operation:any;
  expr :string;
  operations :any;
  captchaResult :number;
  op :any;


  
  selectedState2:any;
 
  //fnStatus :boolean =false ;

  constructor() { 
    this.show = "grp1";
    this.model ={};
    this.countries =  [
                      {name:"Australia" , code:"AUS"},
                      {name :"America", code:"US" },
                      {name:"Canada", code:"CA"},
                      {name :"India", code:"IN"},
                      {name:"Romainia", code:"RO"},
                      {name: "Russia",code:"RU"},
                      {name:"Switzerland",code:"SW"}
                    ];
    this. selectedCountryCode1= null;
    this.selectedState1 = null;
    this. selectedCountryCode2= null;
    this.selectedState2 = null;
    this.states = { "AUS": ["Australian Capital Territory","New South Wales","Northern Territory","Queensland","South","Australia","Tasmania","Victoria","Western Australia"],
                    "US" : ["Alabama.Alaska","Arizona","Arkansas","California","Colorado","Connecticut","Delaware","District of Columbia","Florida","Georgia","Hawaii","Idaho","Illinois","Indiana","New York", "Wisconsin","Wyoming"],
                    "IN" : ["Andhra Pradesh","Arunachal Pradesh","Assam,Bihar","Chhattisgarh","Goa","Gujarat","Haryana","Himachal Pradesh","Jammu and Kashmir","Jharkhand","Karnataka","Kerala","Odisha"],
                    "RO" : ["Alba","Arad","Arges","Bacau","Bihor","Bistrita-Nasaud","Botosani","Braila","Brasov","Bucuresti","Buzau"],
                    "RU" : ["Adygeya","Aginskiy Buryatskiy","Altay","Altayskiy","Amurskaya","Arkhangel","skaya","Astrakhanskaya","Bashkortostan"],
                    "SW" : ["Aargau","Ausser-Rhoden","Basel-Landschaft","Basel-Stadt","Bern","Fribourg","Geneve","Glarus","Graubunden","Inner-Rhoden","Jura,Luzern","Neuchatel"]
                    
    }
    this.num1= Math.round((100-10)*Math.random() +10 );
    
    this.num2= Math.round((100-10)*Math.random() + 10);
    this.operations = ['*','/','+','-'];
    this.expr = "";
    this.captchaResult =0;
    this.op ="";

  }

  ngOnInit(): void {
  }

  

  showGrp2(){
    this.show = "grp2";
    

  }
  showGrp1(){
    this.show = "grp1";
  }
  genCaptcha(){ 
    this. num1     =  Math.round((100-10)*Math.random() +10 );
    this.num2      =  Math.round((100-10)*Math.random() + 10);
    let x          =  (Math.round(10*Math.random()))%4;
    this .op        =  this.operations[x]; 
    this.expr      =  this.num1 + this.op  + this.num2
}
validateCaptcha(){
  let temp = this.num1 + this.op +this.num2
  alert(temp)

}

  

  /*
  validateForm(regForm :any){
    console.log("submitted" +regForm);
    console.log(regForm)
  }*/
  save(s :any){
    console.log(s)
  }
  /*
  matchPasswords(){{}
    if(this.password !=this.password2){
      return true;
    }
    else{
      return false;
    }
  }*/
  /*checkGrp1(regForm:any){
   
    this.fnStatus=regForm.controls.fname.status;
    console.log(this.fnStatus)
    return this.fnStatus;


  }*/

}

