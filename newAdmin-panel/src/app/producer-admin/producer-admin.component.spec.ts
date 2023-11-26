import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducerAdminComponent } from './producer-admin.component';

describe('ProducerAdminComponent', () => {
  let component: ProducerAdminComponent;
  let fixture: ComponentFixture<ProducerAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducerAdminComponent]
    });
    fixture = TestBed.createComponent(ProducerAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
