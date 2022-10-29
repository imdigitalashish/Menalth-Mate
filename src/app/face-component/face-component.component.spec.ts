import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaceComponentComponent } from './face-component.component';

describe('FaceComponentComponent', () => {
  let component: FaceComponentComponent;
  let fixture: ComponentFixture<FaceComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FaceComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaceComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
