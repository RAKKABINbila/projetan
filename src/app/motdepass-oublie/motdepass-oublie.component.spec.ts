import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotdepassOublieComponent } from './motdepass-oublie.component';

describe('MotdepassOublieComponent', () => {
  let component: MotdepassOublieComponent;
  let fixture: ComponentFixture<MotdepassOublieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MotdepassOublieComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MotdepassOublieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
