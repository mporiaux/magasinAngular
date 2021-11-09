import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewcomfactComponent } from './newcomfact.component';

describe('NewcomfactComponent', () => {
  let component: NewcomfactComponent;
  let fixture: ComponentFixture<NewcomfactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewcomfactComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewcomfactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
