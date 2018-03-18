import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  //zmienne
  firstName:string = 'John';
  lastName:string= 'Doe';
  age:number=30;
  address:object = {
    ulica: 'Andersa',
    miasto:'Sopot',
    numerDomu:5
  }
  foo:any;
  hasKids:boolean;
  numberArray: number[];
  stringArray:string[];
  mixedArray:any[];
  myTuple: [string,boolean,number];

  //metody

  constructor() { 
    // console.log('test konstruktora');
    // this.sayHello();
    // console.log(`age: ${this.age}`)
    // this.hasBirthday();
    // console.log(`age after change: ${this.age}`)
    this.firstName = 'Tomek';
    this.foo = true;
    this.hasKids = true;
    this.numberArray = [1,2];
    this.stringArray=['1','dwa','3']
    this.mixedArray=[1,'dwa',true];
    this.myTuple=['jeden',true,2];
  }

  sayHello() {
    console.log(`Hello ${this.firstName}`);
    // to samo co:
    console.log('Hello ' + this.firstName);
  }
  hasBirthday() {
    this.age += 1;
  }
  showAge() {
    return `Age: ${this.age}`;
  }
  addNumbers(num1:number,num2:number):number {
    return num1+num2;
  }



  ngOnInit() {

  }

}
