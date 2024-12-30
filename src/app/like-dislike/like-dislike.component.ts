import { Component } from '@angular/core';

@Component({
  selector: 'app-like-dislike',
  templateUrl: './like-dislike.component.html',
  styleUrl: './like-dislike.component.css'
})
export class LikeDislikeComponent {
  like:number=0;
  dislike:number=0;
  likes(){
    this.like++
  }
  dislikes(){
    this.dislike++
  }

}
