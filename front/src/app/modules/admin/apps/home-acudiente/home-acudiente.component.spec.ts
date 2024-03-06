import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAcudienteComponent } from './home-acudiente.component';

describe('HomeAcudienteComponent', () => {
  let component: HomeAcudienteComponent;
  let fixture: ComponentFixture<HomeAcudienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeAcudienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAcudienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
