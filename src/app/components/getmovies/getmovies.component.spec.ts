import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetmoviesComponent } from './getmovies.component';

describe('GetmoviesComponent', () => {
  let component: GetmoviesComponent;
  let fixture: ComponentFixture<GetmoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetmoviesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetmoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
