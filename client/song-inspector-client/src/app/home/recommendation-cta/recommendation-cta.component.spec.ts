import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendationCtaComponent } from './recommendation-cta.component';

describe('RecommendationCtaComponent', () => {
  let component: RecommendationCtaComponent;
  let fixture: ComponentFixture<RecommendationCtaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecommendationCtaComponent]
    });
    fixture = TestBed.createComponent(RecommendationCtaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
