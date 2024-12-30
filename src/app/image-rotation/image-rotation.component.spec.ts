import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageRotationComponent } from './image-rotation.component';

describe('ImageRotationComponent', () => {
  let component: ImageRotationComponent;
  let fixture: ComponentFixture<ImageRotationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ImageRotationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ImageRotationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
