import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlayerProfileComponent } from './player-profile.component';

describe('PlayerProfileComponent', () => {
  let component: PlayerProfileComponent;
  let fixture: ComponentFixture<PlayerProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlayerProfileComponent]
    });
    fixture = TestBed.createComponent(PlayerProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
