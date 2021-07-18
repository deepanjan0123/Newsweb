import { Component } from '@angular/core';

import { UserService } from './user.service';
import { datatype} from './user';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Studence';
  color = "blue" ;
  err = false;
  data :any ;
  
  
  // name = "dEep";
  // today = Date.now();
  // str = "hello angular tutorial";
  // money = 100;
  // name = " ";
 

  // getValue(value: any){
  //   console.log(value);
  // }
  // changeColor(){
  //   this.color = "green";
  //   this.err = true;
  
  // }
  // userFunction(data: any){
  //   console.warn(data);
    // let detail = this.data;
    // this.name = data.name;
    // this.age = data.age;
  // }
  // constructor(private user:UserService){
  //   this.user.getdata().subscribe(data=>{
  //     console.warn(data);
  //     this.data = data
  //   })
  // }


  // userData(){
  //   const data:datatype = {
  //     name:"Deep",
  //     id :20,
  //     address:"delhi"
  //   }
  //   return data;
  // }

  form = new FormGroup({
    email: new FormControl('',Validators.required),
    password: new FormControl('')
  })
  email: any;
  password: any;
  getValue(){
    console.warn(this.form.value);
    // console.warn(this.password);
    
  }
}
