import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationOutputComponent } from './recommendation-output.component';

describe('RecommendationOutputComponent', () => {
  let component: RecommendationOutputComponent;
  let fixture: ComponentFixture<RecommendationOutputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendationOutputComponent]
    });
    fixture = TestBed.createComponent(RecommendationOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
