import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WithEquipmentPage } from './with-equipment.page';

describe('WithEquipmentPage', () => {
  let component: WithEquipmentPage;
  let fixture: ComponentFixture<WithEquipmentPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(WithEquipmentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
