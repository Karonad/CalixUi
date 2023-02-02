import { FormsModule } from '@angular/forms';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { InputComponent } from './input.component';

describe('InputComponent', () => {
  let component: InputComponent;
  let fixture: ComponentFixture<InputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InputComponent],
      imports: [FormsModule],
    }).compileComponents();

    fixture = TestBed.createComponent(InputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should emit value', () => {
    jest.spyOn(component.valueChange, 'emit');
    const input = fixture.debugElement.query(By.css('input')).nativeElement;
    input.value = 'test';
    input.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    expect(component.valueChange.emit).toHaveBeenCalledWith('calix-test');
  });

  it('should not render hasError', () => {
    component.hasError = false;
    fixture.detectChanges();
    const errorMessageElement = fixture.debugElement.query(
      By.css('.errorMessage')
    );
    expect(errorMessageElement).toBeNull();
  });

  it('should render hasError', () => {
    component.hasError = true;
    fixture.detectChanges();
    const errorMessageElement = fixture.debugElement.query(
      By.css('.errorMessage')
    );
    expect(errorMessageElement).toBeTruthy();
  });

  it('should not render mandatory', () => {
    component.labelMandatory = false;
    fixture.detectChanges();
    const p = fixture.debugElement.query(By.css('p'));
    expect(p).toBeNull();
  });

  it('should render mandatory', () => {
    component.labelMandatory = true;
    fixture.detectChanges();
    const p = fixture.debugElement.query(By.css('p'));
    expect(p).toBeTruthy();
  });
});
