import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RfcInputComponent } from './rfc-input.component';

describe('RfcInputComponent', () => {
  let component: RfcInputComponent;
  let fixture: ComponentFixture<RfcInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RfcInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RfcInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
