import { Component } from '@angular/core';

@Component({
  selector: 'app-add-student-with-delete',
  templateUrl: './add-student-with-delete.component.html',
  styleUrl: './add-student-with-delete.component.css'
})
export class AddStudentWithDeleteComponent {

  // newStudent:string='';
  students:any=[];
  editFlag:boolean=false;
  newStudent={
    name:"",
    address:""
  }

  edStudent={
    i:"",
    name:"",
    address:''
  }

  addStudent(){
    this.students.push(this.newStudent);
    this.newStudent={
      name:"",
      address:""
    }
  }

  deleteStudent(i:number){
    this.students.splice(i,1)
  }

  editStudent(x:any){
    this.editFlag=true;
    this.edStudent=x;

  }

  updateStudent(){
    // this.edStudent=this.edStudent
    // this.edStudent.i=this.edStudent.i;
    this.editFlag=false;

  }

}
