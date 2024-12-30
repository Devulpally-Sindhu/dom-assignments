import { Component } from '@angular/core';

@Component({
  selector: 'app-add-card',
  templateUrl: './add-card.component.html',
  styleUrl: './add-card.component.css'
})
export class AddCardComponent {
  students:any=[];
  newStudent={
    "name":"",
    "number":"",
    "email":"",
    "image":""
  
  }
  add(){
    this.students.push(this.newStudent);
    this.newStudent={
      "name":"",
      "number":"",
      "email":"",
      "image":""
    
    }
  }

}
