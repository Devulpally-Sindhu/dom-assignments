import { Component } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrl: './crud.component.css',
})
export class CrudComponent {
  students: any = [];
  editFlag: boolean = false;
  name: string = '';
  address: string = '';
  currentIndex:any;

  addStudent() {
    let newStudent = {
      name: this.name,
      address: this.address,
    };
    this.students.push(newStudent)
  }

  

  deleteStudent(i:number){
    this.students.splice(i,1)
  }

  editStudent(index:number){
    this.editFlag=true;
    this.currentIndex=index;
    this.name=this.students[index].name;
    this.address=this.students[index].address;
  }

  updateStudent(){
   let student={
    name:this.name,
    address:this.address,
   }
   this.students[this.currentIndex]=student;
   this.editFlag=false;

  }
}
