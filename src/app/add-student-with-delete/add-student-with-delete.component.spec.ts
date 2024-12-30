import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentWithDeleteComponent } from './add-student-with-delete.component';

describe('AddStudentWithDeleteComponent', () => {
  let component: AddStudentWithDeleteComponent;
  let fixture: ComponentFixture<AddStudentWithDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStudentWithDeleteComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStudentWithDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
