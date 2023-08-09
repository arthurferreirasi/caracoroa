import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuffleTeamsComponent } from './shuffle-teams.component';

describe('ShuffleTeamsComponent', () => {
  let component: ShuffleTeamsComponent;
  let fixture: ComponentFixture<ShuffleTeamsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShuffleTeamsComponent]
    });
    fixture = TestBed.createComponent(ShuffleTeamsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
