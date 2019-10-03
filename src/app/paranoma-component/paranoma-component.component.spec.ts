import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParanomaComponentComponent } from './paranoma-component.component';

describe('ParanomaComponentComponent', () => {
  let component: ParanomaComponentComponent;
  let fixture: ComponentFixture<ParanomaComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParanomaComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParanomaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
