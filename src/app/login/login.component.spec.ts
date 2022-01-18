import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [{  useValue: {} }],
      imports: []
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  describe('Should be invalid form', () => {
    it('should be invalid form', () => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const email = component.loginForm.controls.username;
      email.setValue('davidflores10.df@gmail.com');
      expect(component.loginForm.invalid).toBeTruthy();
    });
  });


  describe('Should be valid form', () => {
    it('should valid form', () => {
      fixture = TestBed.createComponent(LoginComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();

      const email = component.loginForm.controls.username;
      email.setValue('davidflores10.df@gmail.com');

      const password = component.loginForm.controls.password;
      password.setValue('2343424');

      expect(component.loginForm.invalid).toBeFalse();
    });
  });

});
