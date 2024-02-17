import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormstdComponent } from './formstd.component';

describe('FormstdComponent', () => {
  let component: FormstdComponent;
  let fixture: ComponentFixture<FormstdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormstdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormstdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
