import { Component } from '@angular/core';

@Component({
  selector: 'app-colorchangediv',
  templateUrl: './colorchangediv.component.html',
  styleUrl: './colorchangediv.component.css'
})
export class ColorchangedivComponent {
  flag:boolean=false;
  toggle(){
    this.flag=true;
  }
  toggle1(){
    this.flag=false

  }

  

}
