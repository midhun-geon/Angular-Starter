import { Component, OnInit } from '@angular/core';
import {UserformModel} from './usrfrm'
import { forEach } from '@angular/router/src/utils/collection';
@Component({
  selector: 'app-userfrm',
  templateUrl: './userfrm.component.html',
  styleUrls: ['./userfrm.component.css']
})
export class UserfrmComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  //  heroes:UserformModel[]=[
  //   {employeeid:1,designation:'Developer',basicsalary:12546,leaddev:'achyuth'}
  // ];
  userfrm:UserformModel=new UserformModel();
  onSubmit()
  {
   let th:any= this.userfrm
   alert(th.employeeid)

  }


}
