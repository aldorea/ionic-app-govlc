import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentsPage } from './monuments.page';

describe('MonumentsPage', () => {
  let component: MonumentsPage;
  let fixture: ComponentFixture<MonumentsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentsPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonumentsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
