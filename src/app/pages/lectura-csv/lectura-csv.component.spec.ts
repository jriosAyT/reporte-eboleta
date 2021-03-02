import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LecturaCSVComponent } from './lectura-csv.component';

describe('LecturaCSVComponent', () => {
  let component: LecturaCSVComponent;
  let fixture: ComponentFixture<LecturaCSVComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LecturaCSVComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LecturaCSVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
