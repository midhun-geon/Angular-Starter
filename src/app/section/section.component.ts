import { Component, OnInit, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {
  @Input() Fullname:string;
ifnamegiven:boolean;
  constructor() { }

  ngOnInit() {
  }
  onSubmit(namei,name2)
  {
    this.Fullname=namei.value +" "+  name2.value;
    name2.value=null;
    if (this.Fullname!=null)
    {
    this.ifnamegiven=true
    }
  }

}
