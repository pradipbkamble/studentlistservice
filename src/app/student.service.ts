import { Injectable } from '@angular/core';
import { Istudent } from './interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  

  constructor() { }
  stdarray:Array<Istudent>=[
    {
      stdname:"jems",
      stdlname:"anderson",
      id:"1",
      email:"abc@123.com",
      contact:1233444
    }
  ]

  fetchstdarray():Array<Istudent>{
    return this.stdarray
    console.log(this.stdarray);
    
  }
  addstd( stdobj:Istudent){
    this.stdarray.push(stdobj)
  }
  deletstd(id:string){
    let getstd=this.stdarray.findIndex(std=>std.id===id)
    console.log(getstd);
    this.stdarray.splice(getstd,1);
  }
  }

