import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonumentDetailPage } from './monument-detail.page';

describe('MonumentDetailPage', () => {
  let component: MonumentDetailPage;
  let fixture: ComponentFixture<MonumentDetailPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonumentDetailPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonumentDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
