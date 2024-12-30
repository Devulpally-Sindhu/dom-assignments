import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  students:any=[];
  newStudent:string="";

  addStudent(){
    this.students.push(this.newStudent);
    this.newStudent=''
  }

}
