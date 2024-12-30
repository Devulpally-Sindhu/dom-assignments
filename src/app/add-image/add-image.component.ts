import { Component } from '@angular/core';

@Component({
  selector: 'app-add-image',
  templateUrl: './add-image.component.html',
  styleUrl: './add-image.component.css'
})
export class AddImageComponent {
  images:any=[];
  img:string=""
  addImage(){
    this.images.push(this.img);
    this.img=''
  }

}
