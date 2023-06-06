import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongMetaComponent } from './song-meta.component';

describe('SongMetaComponent', () => {
  let component: SongMetaComponent;
  let fixture: ComponentFixture<SongMetaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongMetaComponent]
    });
    fixture = TestBed.createComponent(SongMetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
