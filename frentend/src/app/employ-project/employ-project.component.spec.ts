import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployProjectComponent } from './employ-project.component';

describe('EmployProjectComponent', () => {
  let component: EmployProjectComponent;
  let fixture: ComponentFixture<EmployProjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmployProjectComponent]
    });
    fixture = TestBed.createComponent(EmployProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
