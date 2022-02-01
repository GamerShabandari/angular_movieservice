import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayfavoritesComponent } from './displayfavorites.component';

describe('DisplayfavoritesComponent', () => {
  let component: DisplayfavoritesComponent;
  let fixture: ComponentFixture<DisplayfavoritesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayfavoritesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayfavoritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
