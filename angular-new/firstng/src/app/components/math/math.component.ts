import { Component } from '@angular/core';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.css']
})
export class MathComponent {
num:number=0;
num1:number=0;
num2:number=0;
num3:number=0;
num4:number=0;
num5:number=0;
num6:number=0;
num7:number=0;
num8:number=0;
num9:number=0;
num10:number=0;
num11:number=0;
num12:number=0;
num13:number=0;
num15:number=0;
num16:number=0;
result:number=0;
resultsum:number=0;
resultproduct:number=0;
resultquotient:number=0;
resultmodulus:number=0;
resultpower:number=0;
resultsub:number=0;
resultoddeven:string='';
resultcube:number=0;
resultsumdigit:number=0;

factorial():void{
  let fact:any=1;//any means any datatype int fact=1
  for(var i=1;i<=this.num;i++){
    fact*=i;

  }
  this.result=fact;

}
sum():void{
 this.resultsum=this.num1+this.num2;

}
product():void{
  this.resultproduct=this.num3*this.num4;
}
division():void{
  this.resultquotient=this.num5/this.num6;
}
modulus():void{
  this.resultmodulus=this.num7%this.num8;
}
power(b:number,e:number){
  let result:any =1;
  for(var i=1;i<=e;i++){
   result *=b;
  }
  this.resultpower=result;
}
sub():void{
  this.resultsub=this.num11-this.num12;
}
oddeven(num14:number){
  if(num14%2==0){
  this.resultoddeven="even";
  }
  else{
    this.resultoddeven="odd";
  }
}
cube():void{
this.resultcube=this.num15**3;
}
sumofdigits(num17:number){
var r=0;
var sum=0;
while(num17!=0){
  r=num17%10;
  sum=sum+r;
  num17=num17/10;
}
this.resultsumdigit=sum;
}
}