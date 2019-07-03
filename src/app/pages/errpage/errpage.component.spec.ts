import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrpageComponent } from './errpage.component';

describe('ErrpageComponent', () => {
  let component: ErrpageComponent;
  let fixture: ComponentFixture<ErrpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
