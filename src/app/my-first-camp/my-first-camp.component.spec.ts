import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyFirstCampComponent } from './my-first-camp.component';

describe('MyFirstCampComponent', () => {
  let component: MyFirstCampComponent;
  let fixture: ComponentFixture<MyFirstCampComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyFirstCampComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MyFirstCampComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
