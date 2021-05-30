import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { jest } from '@jest/globals'
import { BasicTemplateDrivenFormComponent } from './basic-template-driven-form.component';

describe('BasicFormComponent', () => {
  let component: BasicTemplateDrivenFormComponent;
  let fixture: ComponentFixture<BasicTemplateDrivenFormComponent>;
  let onSubmitSpy: any;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ FormsModule ],
      declarations: [ BasicTemplateDrivenFormComponent ]
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(BasicTemplateDrivenFormComponent);
    component = fixture.componentInstance;
    onSubmitSpy = jest.spyOn(component, 'onSubmit');
    fixture.detectChanges();
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize submitted as false', () => {
    expect(component.submitted).toBeFalsy();
  });

  it('should set submitted to true, when form is submitted', async () => {
    expect(component.submitted).toBeFalsy();
    const compiled = fixture.nativeElement;
    const button = compiled.querySelector('button.btn-success');
    button.click();
    expect(onSubmitSpy).toHaveBeenCalled();
    expect(component.submitted).toBeTruthy();
  });
});
