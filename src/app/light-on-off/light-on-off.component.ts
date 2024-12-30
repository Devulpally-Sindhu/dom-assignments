import { Component } from '@angular/core';

@Component({
  selector: 'app-light-on-off',
  templateUrl: './light-on-off.component.html',
  styleUrl: './light-on-off.component.css'
})
export class LightOnOffComponent {
  onImg:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwJA60r489vGpDKYhbeHjigG_a-pu1e7020A&s";
  offImg:string="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjyxy9DF82PQGDMGaCs2hPM5Mm4gsZAsFn0A&s";
  flag:boolean=false;

  toggle(){
    this.flag=!this.flag
  }

}
