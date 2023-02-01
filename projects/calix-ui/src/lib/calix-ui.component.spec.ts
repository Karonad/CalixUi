import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalixUiComponent } from './calix-ui.component';

describe('CalixUiComponent', () => {
  let component: CalixUiComponent;
  let fixture: ComponentFixture<CalixUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalixUiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalixUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  test('should create', () => {
    expect(component).toBeTruthy();
  });
});
