import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddStudentWiComponent } from './add-student-wi.component';

describe('AddStudentWiComponent', () => {
  let component: AddStudentWiComponent;
  let fixture: ComponentFixture<AddStudentWiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddStudentWiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddStudentWiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
