import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEmployeProjectComponent } from './create-employe-project.component';

describe('CreateEmployeProjectComponent', () => {
  let component: CreateEmployeProjectComponent;
  let fixture: ComponentFixture<CreateEmployeProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeProjectComponent]
    });
    fixture = TestBed.createComponent(CreateEmployeProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
