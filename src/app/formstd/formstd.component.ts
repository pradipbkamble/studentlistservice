import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UuidService } from '../uuid.service';
import { StdlistComponent } from '../stdlist/stdlist.component';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-formstd',
  templateUrl: './formstd.component.html',
  styleUrls: ['./formstd.component.scss']
})
export class FormstdComponent implements OnInit {
  stdform!:FormGroup;
  constructor( private _uuids:UuidService ,private _stdarrays:StudentService) { }

  ngOnInit(): void {
    this.creatstd()
    

  }
  creatstd(){
    this.stdform=new FormGroup({
      stdname:new FormControl( null,[Validators.required]),
      stdlname:new FormControl( null,[Validators.required]),
      email:new FormControl( null,[Validators.required]),
      contact:new FormControl( null,[Validators.required]),
    })
  }
  onsubmit(){
    if(this.stdform.valid){
     alert('are you sure')
      this.stdform.value
    console.log(this.stdform.value);
    let obj={...this.stdform.value,id:this._uuids.uuid()}
    this._stdarrays.addstd(obj)
    console.log(obj);
    this.stdform.reset()
    
    }

    
  }
}
