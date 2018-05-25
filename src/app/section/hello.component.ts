import { Component, OnInit, Input , OnChanges, SimpleChanges, SimpleChange } from '@angular/core';
import { NgForm } from '@angular/forms';
import {SectionComponent} from './section.component';
@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html'
})
export class helloComponent implements OnChanges
{
 @Input() data;
 childmessage : string ;

 constructor()
 {
    
 }
 ngOnInit() {
  
  
}


ngOnChanges(data: SimpleChanges) {
  
         for (let property in data) {

              this.childmessage="Hai "+data[property].currentValue;
         }
     }
 
}