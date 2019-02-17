import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPartComponent } from './login-part.component';

describe('LoginPartComponent', () => {
  let component: LoginPartComponent;
  let fixture: ComponentFixture<LoginPartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginPartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginPartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
