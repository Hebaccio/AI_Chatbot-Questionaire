import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Assistant } from './assistant';

describe('AnimationMoviesComponent', () => {
  let component: Assistant;
  let fixture: ComponentFixture<Assistant>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Assistant]
    });
    fixture = TestBed.createComponent(Assistant);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
