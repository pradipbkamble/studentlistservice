import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Istudent } from '../interface';

@Component({
  selector: 'app-stdlist',
  templateUrl: './stdlist.component.html',
  styleUrls: ['./stdlist.component.scss']
})
export class StdlistComponent implements OnInit {

stdarray!:Array<Istudent>

  constructor(private _stdarrays:StudentService) { }

  ngOnInit(): void {
  this.stdarray=this._stdarrays.fetchstdarray()
  console.log(this.stdarray);
  
  }
  ondelet(id:string){
    console.log(id);
    alert('are you sure')
    this._stdarrays.deletstd(id)
    
    
  }
}
