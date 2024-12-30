import { Component } from '@angular/core';

@Component({
  selector: 'app-image-rotation',
  templateUrl: './image-rotation.component.html',
  styleUrl: './image-rotation.component.css'
})
export class ImageRotationComponent {
  images:any=["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-PNiHedwYyPaHgJGsZXNK-NRvjdfxq8J50A&s",
    "https://cdn.pixabay.com/photo/2021/12/09/20/46/burger-6859072_1280.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKciJmfwzilCmI4htUz3WoMauch_ese4fLtQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWBsWOToGlOPbW6om7tjwTaymYZ7y1OZkwHw&s"
  ];

  i:number=0;
  cimg:string=this.images[this.i];

  pre(){
    if(this.i>0){
      this.i--
    }
    else{
      this.i=this.images.length-1
    }
    this.cimg=this.images[this.i]
  }

  next(){
    if(this.i<this.images.length-1){
      this.i++
    }
    else{
      this.i=0;
    }
    this.cimg=this.images[this.i]
  }

}
