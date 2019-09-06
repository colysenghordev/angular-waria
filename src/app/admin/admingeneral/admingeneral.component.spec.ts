import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmingeneralComponent } from './admingeneral.component';

describe('AdmingeneralComponent', () => {
  let component: AdmingeneralComponent;
  let fixture: ComponentFixture<AdmingeneralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdmingeneralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmingeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
