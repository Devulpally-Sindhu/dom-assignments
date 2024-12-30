import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LightOnOffComponent } from './light-on-off.component';

describe('LightOnOffComponent', () => {
  let component: LightOnOffComponent;
  let fixture: ComponentFixture<LightOnOffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LightOnOffComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LightOnOffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
