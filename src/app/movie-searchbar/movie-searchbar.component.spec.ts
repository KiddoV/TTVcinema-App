import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSearchbarComponent } from './movie-searchbar.component';

describe('MovieSearchbarComponent', () => {
  let component: MovieSearchbarComponent;
  let fixture: ComponentFixture<MovieSearchbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSearchbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSearchbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
