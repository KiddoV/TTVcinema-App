import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieSlideshowComponent } from './movie-slideshow.component';

describe('MovieSlideshowComponent', () => {
  let component: MovieSlideshowComponent;
  let fixture: ComponentFixture<MovieSlideshowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieSlideshowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieSlideshowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
