import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastMessages } from './toast-messages';

describe('ToastMessages', () => {
  let component: ToastMessages;
  let fixture: ComponentFixture<ToastMessages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastMessages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToastMessages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
