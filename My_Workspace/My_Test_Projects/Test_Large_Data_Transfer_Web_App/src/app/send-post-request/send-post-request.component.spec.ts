import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SendPostRequestComponent } from './send-post-request.component';

describe('SendPostRequestComponent', () => {
  let component: SendPostRequestComponent;
  let fixture: ComponentFixture<SendPostRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SendPostRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SendPostRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
