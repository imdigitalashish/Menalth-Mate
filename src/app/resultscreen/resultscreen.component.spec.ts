import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultscreenComponent } from './resultscreen.component';

describe('ResultscreenComponent', () => {
  let component: ResultscreenComponent;
  let fixture: ComponentFixture<ResultscreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultscreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResultscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
