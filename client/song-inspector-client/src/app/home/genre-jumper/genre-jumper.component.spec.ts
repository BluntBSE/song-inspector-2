import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GenreJumperComponent } from './genre-jumper.component';

describe('GenreJumperComponent', () => {
  let component: GenreJumperComponent;
  let fixture: ComponentFixture<GenreJumperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GenreJumperComponent]
    });
    fixture = TestBed.createComponent(GenreJumperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
