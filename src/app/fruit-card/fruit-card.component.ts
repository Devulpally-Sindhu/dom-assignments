import { Component } from '@angular/core';

@Component({
  selector: 'app-fruit-card',
  templateUrl: './fruit-card.component.html',
  styleUrl: './fruit-card.component.css'
})
export class FruitCardComponent {
  fruits:any=[];
  fruitName:string=''
  fruitImage:string=''
  fruitDescription:string='';
  currentIndex:any;
  editFlag:boolean=false;

  addFruit(){
    let fruit={
      "name":this.fruitName,
      "image":this.fruitImage,
      "description":this.fruitDescription
    }
    this.fruits.push(fruit)
  }

  deleteFruit(i:number){
    this.fruits.splice(i,1)
  }

  editFruit(i:number){
    this.currentIndex=i;
    this.editFlag=true;
    this.fruitName=this.fruits[i].name;
    this.fruitImage=this.fruits[i].image;
    this.fruitDescription=this.fruits[i].description
  }

  updateFruit(){
    let fruit={
      name:this.fruitName,
      address:this.fruitImage,
      description:this.fruitDescription
     }
     this.fruits[this.currentIndex]=fruit;
     this.editFlag=false;  
  }



}
