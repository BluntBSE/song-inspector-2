import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SongAttributesComponent } from './song-attributes.component';

describe('SongAttributesComponent', () => {
  let component: SongAttributesComponent;
  let fixture: ComponentFixture<SongAttributesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SongAttributesComponent]
    });
    fixture = TestBed.createComponent(SongAttributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
