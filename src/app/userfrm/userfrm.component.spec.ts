import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfrmComponent } from './userfrm.component';

describe('UserfrmComponent', () => {
  let component: UserfrmComponent;
  let fixture: ComponentFixture<UserfrmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserfrmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserfrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
