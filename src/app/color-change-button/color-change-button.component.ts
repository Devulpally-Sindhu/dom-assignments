import { Component } from '@angular/core';

@Component({
  selector: 'app-color-change-button',
  templateUrl: './color-change-button.component.html',
  styleUrl: './color-change-button.component.css'
})
export class ColorChangeButtonComponent {
  flag:boolean=false;
  toggle(){
    this.flag=!this.flag

  }

}
