import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendGetRequestComponent } from './send-get-request.component';

describe('SendGetRequestComponent', () => {
  let component: SendGetRequestComponent;
  let fixture: ComponentFixture<SendGetRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendGetRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendGetRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
