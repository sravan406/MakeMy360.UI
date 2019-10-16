import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailogMapsComponent } from './dailog-maps.component';

describe('DailogMapsComponent', () => {
  let component: DailogMapsComponent;
  let fixture: ComponentFixture<DailogMapsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailogMapsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailogMapsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
