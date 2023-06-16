import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongChooserComponent } from './song-chooser.component';

describe('SongChooserComponent', () => {
  let component: SongChooserComponent;
  let fixture: ComponentFixture<SongChooserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongChooserComponent]
    });
    fixture = TestBed.createComponent(SongChooserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
