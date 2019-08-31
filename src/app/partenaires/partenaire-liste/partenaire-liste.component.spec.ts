import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenaireListeComponent } from './partenaire-liste.component';

describe('PartenaireListeComponent', () => {
  let component: PartenaireListeComponent;
  let fixture: ComponentFixture<PartenaireListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PartenaireListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PartenaireListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
