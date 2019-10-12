import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppLayOutComponent } from './app-lay-out.component';

describe('AppLayOutComponent', () => {
  let component: AppLayOutComponent;
  let fixture: ComponentFixture<AppLayOutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppLayOutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppLayOutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
