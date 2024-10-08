import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppHeroListComponent } from './app-hero-list.component';

describe('AppHeroListComponent', () => {
  let component: AppHeroListComponent;
  let fixture: ComponentFixture<AppHeroListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppHeroListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppHeroListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
